import React, { useEffect, useState } from "react";
import TableHeader from "./table-header/EventEHRTableHeader";
import TableBody from "./table-body/EventEHRTableBody";
import Pagination from "../pagination/EventEHRPagination";

const VARIANTS = {
  SM: "sm",
  MD: "md",
  LG: "lg",
};

const Table = ({
  selectProps = {
    isSelectAll: false,
    onSelectAll: () => {},
    isSelectable: false,
    onSelectRowsCb: () => {},
    selectIdentifier: "",
  },
  columns,
  rows = [],
  sorting,
  paginationProps = {
    isPagination: false,
    onPageChange: () => {},
  },
  variant = "md",
  tableHeaderCustomclasses,
}: any) => {
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    if (selectProps.onSelectRowsCb) {
      selectProps.onSelectRowsCb(selectedRows);
    }
  }, [selectedRows]);

  const getVarient = () => {
    switch (variant) {
      case VARIANTS.SM:
        return "px-4 py-[8px]";
      case VARIANTS.MD:
        return "px-5 py-4";
      default:
        return "px-5 py-4";
    }
  };

  const selectAllCb = () => {
    if (selectProps?.onSelectAll) {
      selectProps?.onSelectAll([]);
    }

    if (selectedRows.length === rows.length) {
      return setSelectedRows([]);
    }
    setSelectedRows(rows);
  };

  useEffect(() => {
    if (!selectProps?.isSelectAll) {
      setSelectedRows([]);
    }
  }, [selectProps?.isSelectAll]);

  return (
    <div className="flex flex-1 flex-col justify-between w-full">
      <table className="w-full">
        <TableHeader
          selectProps={selectProps}
          selectAllCb={selectAllCb}
          columns={columns}
          sorting={sorting}
          allChecked={selectedRows.length === rows.length}
          getVarient={getVarient}
          tableHeaderCustomclasses={tableHeaderCustomclasses}
        />
        {rows?.length > 0 ? (
          <TableBody
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            selectProps={selectProps}
            columns={columns}
            rows={rows}
            getVarient={getVarient}
          />
        ) : (
          <tbody>
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 text-neutral-70 font-bold"
              >
                No data found!
              </td>
            </tr>
          </tbody>
        )}
      </table>
      {paginationProps?.isPagination && rows?.length ? (
        <Pagination
          totalCount={paginationProps.totalCount}
          limit={paginationProps.limit}
          onPageChangeCb={paginationProps.onPageChange}
        />
      ) : null}
    </div>
  );
};

export default Table;
