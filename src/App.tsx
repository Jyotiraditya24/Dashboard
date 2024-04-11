import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader.js";
import ProductManagement from "./pages/management/ProductManagement.js";
import TransactionManagement from "./pages/management/TransactionManagement.js";

const Dashboard = lazy(() => import("./pages/Dashboard.js"));
const Products = lazy(() => import("./pages/Products.js"));
const Transaction = lazy(() => import("./pages/Transaction.js"));
const Customers = lazy(() => import("./pages/Customers.js"));
const NewProduct = lazy(() => import("./pages/management/NewProduct.js"));
const BarCharts = lazy(() => import("./pages/charts/BarCharts.js"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts.js"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts.js"));
const Toss = lazy(() => import("./pages/apps/Toss.js"));
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch.js"));
const Coupon = lazy(() => import("./pages/apps/Coupon.js"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Link to="/admin/dashboard">
                <button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "10px 20px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "5px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  Visit Dashboard
                </button>
              </Link>
            }
          ></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/products" element={<Products />}></Route>
          <Route path="/admin/transaction" element={<Transaction />}></Route>
          <Route path="/admin/customers" element={<Customers />}></Route>
          {/* CHARTS */}
          <Route path="admin/chart/bar" element={<BarCharts />}></Route>
          <Route path="admin/chart/line" element={<LineCharts />}></Route>
          <Route path="admin/chart/pie" element={<PieCharts />}></Route>

          {/* APPS */}
          <Route path="admin/app/stopwatch" element={<Stopwatch />}></Route>
          <Route path="admin/app/coupon" element={<Coupon />}></Route>
          <Route path="admin/app/toss" element={<Toss />}></Route>

          {/* MANAGEMENT */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="admin/transaction/:id"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
