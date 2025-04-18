"use client";

import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Header } from "./datatable/header";
import { Frame } from "./datatable/frame";
import { Pagination } from "./datatable/pagination";
import { columns } from "./datatable/columns";
import { Record } from "../actions";

type DatatableProps = {
  data: Record[];
};
export function Datatable({ data }: DatatableProps) {
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div className="flex size-full flex-col gap-4">
      <Header table={table} />
      <Frame table={table} />
      <Pagination table={table} />
    </div>
  );
}
