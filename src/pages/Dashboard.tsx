import Sidebar from "../components/Sidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* SIDEBAR */}
      <Sidebar />
      {/* MAIN */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data,users,docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
