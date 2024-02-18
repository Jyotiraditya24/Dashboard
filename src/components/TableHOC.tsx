import { useTable, Column, TableOptions } from "react-table";

const TableHOC = <T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassName: string,
  heading: string
) => {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
    };
    const table = useTable(options);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      table; 
    return (
      <div className={containerClassName}>
        <h2 className="heading">{heading}</h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderGroupProps}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}

            <tbody {...getTableBodyProps()}>
                  {
                    rows.map((r))
                  }
            </tbody>
          </thead>
        </table>
      </div>
    );
  };
};

export default TableHOC;
