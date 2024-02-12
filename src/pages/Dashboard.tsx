import Sidebar from "../components/Sidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json";

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
            heading="Users"
            value={100}
            percent={-14}
            color="rgb(0,198,202)"
          />
          <WidgetItem
            heading="Transactions"
            value={23000}
            percent={20}
            color="rgb(255 196 0)"
          />
          <WidgetItem
            heading="Product"
            value={1000}
            percent={30}
            color="rgb(76 0 255)"
          />
        </section>
        {/* GRAPH SECTION */}
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((d) => (
                <CategoryItem
                  key={d.heading}
                  heading={d.heading}
                  value={d.value}
                  color={`hsl(${d.value},100%,50%)`}
                />
              ))}
            </div>
          </div>
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
  amount = false,
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
      }}
    >
      <span style={{ color: color }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      {/* one div for background and another div for indication */}
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
