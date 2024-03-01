import { DonghnutChart, PieChart } from "../../components/Chart";
import Sidebar from "../../components/Sidebar";
import { categories } from "../../assets/data.json";

const PieCharts = () => {
  return (
    <div className="adminContainer">
      <Sidebar></Sidebar>
      <main className="chart-container">
        <h1>Pie & Dougnut Charts</h1>
        <section>
          <div>
            <PieChart
              data={[12, 9, 3]}
              backgroundColor={[
                `hsl(110,80%,80%)`,
                `hsl(110,80%,50%)`,
                `hsl(110,40%,50%)`,
              ]}
              labels={["Processing", "Shipped", "Delivered"]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Top Selling Products & Top Customers</h2>
        </section>
        <section>
          <div>
            <DonghnutChart
              data={categories.map((c) => c.value)}
              backgroundColor={categories.map(
                (c) => `hsl(${c.value * 2},${c.value * 4}%,50%)`
              )}
              labels={categories.map((C) => C.heading)}
              offset={[0, 0, 50, 80]}
              legend={false}
            />
          </div>
          <h2>Products Categories Ratio</h2>
        </section>

        <section>
          <div>
            <DonghnutChart
              data={[40, 20]}
              backgroundColor={[`hsl(100,80%,50%)`, `hsl(203,50%,50%)`]}
              labels={["In Stock", "Out Of Stock"]}
              offset={[0, 50]}
              legend={false}
              cutout={"70%"}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>
        <section>
          <div>
            <DonghnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[32, 18, 5, 20, 25]}
              backgroundColor={[
                "hsl(110,80%,40%)",
                "hsl(19,80%,40%)",
                "hsl(69,80%,40%)",
                "hsl(300,80%,40%)",
                "rgb(53, 162, 255)",
              ]}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>
        <section>
          <div>
            <PieChart
              labels={[
                "Teenager(Below 20)",
                "Adult (20-40)",
                "Older (above 40)",
              ]}
              data={[30, 250, 70]}
              backgroundColor={[
                `hsl(10, ${80}%, 80%)`,
                `hsl(10, ${80}%, 50%)`,
                `hsl(10, ${40}%, 50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Users Age Group</h2>
        </section>
        <section>
          <div>
            <DonghnutChart
              labels={["Admin", "Customers"]}
              data={[40, 250]}
              backgroundColor={[`hsl(335, 100%, 38%)`, "hsl(44, 98%, 50%)"]}
              offset={[0, 80]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
