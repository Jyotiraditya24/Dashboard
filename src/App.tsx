import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import ProductManagement from "./pages/management/ProductManagement";
import TransactionManagement from "./pages/management/TransactionManagement";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const Toss = lazy(() => import("./pages/apps/Toss"));
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
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
