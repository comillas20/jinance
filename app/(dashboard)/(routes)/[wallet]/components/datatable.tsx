"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { getRecords } from "../actions";
import { columns } from "./datatable/columns";
import { Frame } from "./datatable/frame";
import { Header } from "./datatable/header";
import { Pagination } from "./datatable/pagination";

type DatatableProps = {
  walletId: number;
};

export function Datatable({ walletId }: DatatableProps) {
  const { data, isFetching } = useQuery({
    queryKey: ["records", walletId],
    queryFn: async () => getRecords(walletId),
  });

  const table = useReactTable({
    data: data || [],
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  if (!isFetching)
    return (
      <div className="flex size-full flex-col gap-4">
        <Header table={table} />
        <Frame table={table} />
        <Pagination table={table} />
      </div>
    );
}
