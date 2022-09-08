import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";

const Table = () => {
  const { data, isError, isFetching, isLoading } = useQuery(
    ["table-data"],

    async () => {
      const url = new URL("/api/data", "https://www.material-react-table.com");

      return axiosData;
    },

    { keepPreviousData: true }
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "Name",
      },
      {
        accessorKey: "lastName",
        header: "Category",
      },
      {
        accessorKey: "address",
        header: "Score",
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection
      getRowId={(row) => row.phoneNumber}
      muiToolbarAlertBannerProps={
        isError
          ? {
              color: "error",
              children: "Error loading data",
            }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      rowCount={rowCount}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: isRefetching,
        sorting,
      }}
    />
  );
};

export default Table;
