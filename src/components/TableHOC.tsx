import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination,
} from "react-table";
import {
  AiOutlineSortDescending,
  AiOutlineSortAscending,
} from "react-icons/ai";

const TableHOC = <T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassName: string,
  heading: string,
  showPagination: boolean = false
) => {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 1,
      },
    };
    const table = useTable(options, useSortBy, usePagination);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageCount,
      state: { pageIndex },
    } = table;
    return (
      <div className={containerClassName}>
        <h2 className="heading">{heading}</h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted && (
                      <span>
                        {column.isSortedDesc ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {showPagination && (
          <div>
            <button disabled={!canPreviousPage} onClick={previousPage}>
              Previous
            </button>
            <span>{`${pageIndex} Page of ${pageCount}`}</span>
            <button disabled={!canNextPage} onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
};

export default TableHOC;
