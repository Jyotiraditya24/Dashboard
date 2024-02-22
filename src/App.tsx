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

          {/* APPS */}

          {/* MANAGEMENT */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement/>} />
          <Route path="admin/transaction/:id" element={<TransactionManagement />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
