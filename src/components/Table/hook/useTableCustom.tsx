import { useMemo } from "react";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { PropsTable } from "../interfaces/interfaces";

export const useTableCustom = <T extends object>({
  dataColumns,
  mockData,
}: PropsTable<T>) => {
  const data = useMemo(() => mockData, [mockData]);
  const columns = useMemo(() => dataColumns, [dataColumns]);

  const {
    getHeaderGroups,
    getRowModel,
    getCanNextPage,
    getCanPreviousPage,
    getPageCount,
    nextPage,
    previousPage,
    setPageIndex,
  } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return {
    getHeaderGroups,
    getRowModel,
    getCanNextPage,
    getCanPreviousPage,
    getPageCount,
    nextPage,
    previousPage,
    setPageIndex,
  };
};
