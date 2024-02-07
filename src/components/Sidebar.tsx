import { IconType } from "react-icons";
import { Link, Location, useLocation } from "react-router-dom";
import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiCoupon3Fill,
} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import {
  FaChartBar,
  FaChartPie,
  FaChartLine,
  FaStopwatch,
  FaGamepad,
} from "react-icons/fa";

interface ListProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const List = ({ url, text, location, Icon }: ListProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
        color: location.pathname.includes(url) ? "rgb(0,115,255" : "black",
      }}
    >
      <Link to={url}>
        <Icon />
        {text}
      </Link>
    </li>
  );
};

const DashboardData_1: {
  id: string;
  url: string;
  icon: IconType;
  text: string;
}[] = [
  {
    id: "1",
    url: "/admin/dashboard",
    icon: RiDashboardFill,
    text: "Dashboard",
  },
  {
    id: "2",
    url: "/admin/products",
    icon: RiShoppingBag3Fill,
    text: "Products",
  },
  {
    id: "3",
    url: "/admin/customers",
    icon: IoIosPeople,
    text: "Customer",
  },
  {
    id: "4",
    url: "/admin/transaction",
    icon: AiFillFileText,
    text: "Transaction",
  },
];

const DashboardData_2: {
  id: string;
  url: string;
  icon: IconType;
  text: string;
}[] = [
  {
    id: "1",
    url: "/admin/chart/bar",
    icon: FaChartBar,
    text: "Bar",
  },
  {
    id: "2",
    url: "/admin/chart/line",
    icon: FaChartLine,
    text: "Line",
  },
  {
    id: "3",
    url: "/admin/chart/pie",
    icon: FaChartPie,
    text: "Pie",
  },
];

const DashboardData_3: {
  id: string;
  url: string;
  icon: IconType;
  text: string;
}[] = [
  {
    id: "1",
    url: "/admin/app/stopwatch",
    icon: FaStopwatch,
    text: "Stopwatch",
  },
  {
    id: "2",
    url: "/admin/app/coupon",
    icon: RiCoupon3Fill,
    text: "Coupon",
  },
  {
    id: "3",
    url: "/admin/app/toss",
    icon: FaGamepad,
    text: "Toss",
  },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo</h2>
      {/* DIV 1 */}
      <div>
        <h5>Dashboard</h5>
        <ul>
          {DashboardData_1.map((data) => (
            <List
              key={data.id}
              url={data.url}
              text={data.text}
              location={location}
              Icon={data.icon}
            />
          ))}
        </ul>
      </div>
      {/* DIV 2 */}
      <div>
        <h5>Charts</h5>
        <ul>
          {DashboardData_2.map((data) => (
            <List
              key={data.id}
              url={data.url}
              text={data.text}
              location={location}
              Icon={data.icon}
            />
          ))}
        </ul>
      </div>
      {/* DIV 3 */}
      <div>
        <h5>Apps</h5>
        <ul>
          {DashboardData_3.map((data) => (
            <List
              key={data.id}
              url={data.url}
              text={data.text}
              location={location}
              Icon={data.icon}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
