import { useMemo, useState } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  InitialStatePagination,
  PropsChangeInput,
  PropsTable,
} from "../interfaces/interfaces";

const initialStateProps: InitialStatePagination = {
  pageSize: 10,
  pageIndex: 0,
};

export const useTableCustom = <T extends object>({
  dataColumns,
  mockData,
}: PropsTable<T>) => {
  const data = useMemo(() => mockData, [mockData]);
  const columns = useMemo(() => dataColumns, [dataColumns]);
  const initialState = useMemo(() => initialStateProps, []);
  const [filterByRow, setFilterByRow] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  const {
    getCanNextPage,
    getCanPreviousPage,
    getHeaderGroups,
    getPageCount,
    getPageOptions,
    getRowModel,
    getState,
    nextPage,
    previousPage,
    setPageIndex,
    setPageSize,
  } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: { pagination: initialState },
    onGlobalFilterChange: setFilterByRow,
    onSortingChange: setSorting,
    state: { sorting: sorting, globalFilter: filterByRow },
  });

  const {
    pagination: { pageIndex, pageSize },
  } = getState();

  const onGoToPageInput = ({ target }: PropsChangeInput) => {
    const page = target.value ? Number(target.value) - 1 : 0;

    if (page < getPageOptions().length) {
      setPageIndex(page);
    }
  };

  const onCreateOtherRow = ({ target }: PropsChangeInput) => {
    setPageSize(Number(target.value));
  };

  const onChangeInputFilter = ({ target }: PropsChangeInput) => {
    setFilterByRow(target.value);
  };

  return {
    filterByRow,
    getCanNextPage,
    getCanPreviousPage,
    getHeaderGroups,
    getPageCount,
    getPageOptions,
    getRowModel,
    nextPage,
    onChangeInputFilter,
    onCreateOtherRow,
    onGoToPageInput,
    pageIndex,
    pageSize,
    previousPage,
    setPageIndex,
  };
};
