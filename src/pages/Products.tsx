import { ReactElement, useCallback, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import Sidebar from "../components/Sidebar.js";
import TableHOC from "../components/TableHOC.js";

interface ProductType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}
const columns: Column<ProductType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

const arr: ProductType[] = [
  {
    photo: <img src={img} alt="Shoes"></img>,
    name: "Puma Shoes Air Jordan Cook 2023",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook 2023",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<ProductType[]>(arr);
  const Table = useCallback(
    TableHOC<ProductType>(columns, data, "dashboard-product-box", "Products",true),
    []
  );

  return (
    <div className="adminContainer">
      {/* SIDEBAR */}
      <Sidebar />
      {/* MAIN */}
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus></FaPlus>
      </Link>
    </div>
  );
};

export default Products;
