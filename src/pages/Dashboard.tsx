import Sidebar from "../components/Sidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* SIDEBAR */}
      <Sidebar />
      {/* MAIN */}
      <main className="dashboard">
        {/* DIV SERACH BAR */}
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data,users,docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        {/* WIDGET DIV */}
        <section className="widget-container">
          <WidgetItem
            heading="heading"
            value={100}
            percent={20}
            color="rgb(0,115,255)"
            amount={true}
          />
          <WidgetItem
            heading="heading"
            value={100}
            percent={20}
            color="rgb(0,115,255)"
            amount={true}
          />
          <WidgetItem
            heading="heading"
            value={100}
            percent={-14}
            color="rgb(0,115,255)"
            amount={false}
          />
          <WidgetItem
            heading="heading"
            value={100}
            percent={20}
            color="rgb(0,115,255)"
            amount={true}
          />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => (
  <article className="widget">
    {/* WIDGEINFO LEFT SIDE */}
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp />+{percent}%
        </span>
      ) : (
        <span className="green">
          <HiTrendingDown />
          {percent}%
        </span>
      )}
    </div>
    {/* WIDGET INFO RIGHT SIDE */}
   <div
  className="widgetCircle"
  style={{
    background: `conic-gradient(
      ${color} ${Math.abs(percent * 3.6)}deg,
      rgb(255,255,255) 0
    )`,
  }}>
      <span style={{ color: color }}>{percent}%</span>
    </div>
  </article>
);

export default Dashboard;
