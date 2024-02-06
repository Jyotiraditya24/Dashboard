import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));

const App = () => {
  return (
    <Router>
      <Suspense fallback="loadding......">
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/products" element={<Products />}></Route>
          <Route path="/admin/transaction" element={<Transaction />}></Route>
          <Route path="/admin/transaction" element={<Customers />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
