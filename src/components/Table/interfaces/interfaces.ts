import { HeaderGroup, RowModel } from "@tanstack/react-table";
import { ButtonHTMLAttributes } from "react";

// Components

export interface PropsHeaderTable<T extends object> {
    getHeaderGroups: () => HeaderGroup<T>[];
}

export interface PropsBodyTable<T extends object> {
    getRowModel: () => RowModel<T>;
}

// helpers

export type ItemColomns = {
    accessorKey: string;
    header: string;
};

// Pagination

export interface PropsPagination {
    getCanNextPage: () => boolean;
    getCanPreviousPage: () => boolean;
    getPageCount: () => number;
    nextPage: () => void;
    previousPage: () => void;
    setPageIndex: (n: number) => void;
}

export interface PropsBtnPagination
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: JSX.Element;
    onActionBtn: () => void;
}

// Table

export interface PropsTable<T extends object> {
    mockData: T[];
    dataColumns: ItemColomns[];
}