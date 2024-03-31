import Sidebar from "../../components/Sidebar";

const Coupon = () => {
  return (
    <div className="adminContainer">
      <Sidebar></Sidebar>'
      <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>00:00:00</h2>
            <button>Start</button>
            <button>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Coupon;
