import Sidebar from "../components/Sidebar";

export default function Customers() {
  return (
    <div className="adminContainer">
      {/* SIDEBAR */}
      <Sidebar />
      {/* MAIN */}
      <main className="dashboard">
        <div className="bar">
          bar 
        </div>
      </main>
    </div>
  );
}
