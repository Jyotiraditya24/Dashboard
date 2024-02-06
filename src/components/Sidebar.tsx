import { Location, useLocation, useNavigate } from "react-router-dom";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { RiDashboardFill,RiShoppingBag3Fill } from "react-icons/ri";
import {AiFillFileText} from "react-icons/ai"
import {IoIosPeople} from "react-icons/io"

const Sidebar = () => {
  const DashboardData = [
    {
      id: "1",
      url: "/admin/dashboard",
      icon: <RiDashboardFill />,
      text: "Dashboard",
    },
    {
      id: "2",
      url: "/admin/products",
      icon:<RiShoppingBag3Fill/>,
      text:"Products"

    },
    {
      id: "3",
      url: "/admin/customers",
      icon:<IoIosPeople/>,
      text:"Customer"
    },
    {
      id: "4",
      url: "/admin/transaction",
      icon:<AiFillFileText/>,
      text:"Transaction"
    },
  ];
  return (
    <aside>
      <h2>Logo</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          {DashboardData.map((data) => (
            <li id={data.id}>
              <Link to={data.url}></Link>
              {data.icon}
              {data.text}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
