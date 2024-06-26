import { Column } from "react-table";
import TableHOC from "./TableHOC.js";

interface DataType {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}
const columns: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];
const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  return TableHOC<DataType>(
    columns,
    data,
    "transaction-box",
    "Top Transaction"
  )();
};
// called the function on line 47 because we need an JSX ELEMEENT

export default DashboardTable;
