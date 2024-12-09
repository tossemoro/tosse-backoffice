"use client";

import * as React from "react";
import {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DashboardTitle } from "../../global/dashboard-title";
import { AppContainer, Spacer } from "@/components/global";

const data: Payment[] = [
  {
    id: "",
    numero_emetteur: 686438664,
    numero_recepteur: 686438664,
    date_et_heure: "12/10/2000 14:00",
    email: "hassan99@yahoo.com",
    details: "Je n'ai pas reçu mon crédit",
    action: "",
  },
  {
    id: "",
    numero_emetteur: 66468526,
    numero_recepteur: 66468526,
    date_et_heure: "12/10/2000 15:00",
    email: "Ali45@gmail.com",
    details: "Je n'ai pas pu lancer la requête / paiement",
    action: "",
  },
  {
    id: "",
    numero_emetteur: 77777777777,
    numero_recepteur: 77777777777,
    date_et_heure: "12/10/2000 17:00",
    email: "vincent@gmail.com",
    details: "Comment ça marche ?",
    action: "",
  },
  {
    id: "",
    numero_emetteur: 888888888888,
    numero_recepteur: 888888888888,
    date_et_heure: "12/10/2000 18:00",
    email: "moussa@hotmail.com",
    details: "Comment ça marche ?",
    action: "",
  },
];
export type Payment = {
  id: string;
  numero_emetteur: number;
  numero_recepteur: number;
  date_et_heure: string | null;
  email: string;
  details: string;
  action: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    header: "ID",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "numero_emetteur",
    header: "Numéro de l'emetteur",
    cell: ({ row }) => (
      <div>{row.getValue("numero_emetteur")}</div>
    ),
  },
  {
    accessorKey: "numero_recepteur",
    header: "Numéro du recepteur",
    cell: ({ row }) => (
      <div>{row.getValue("numero_recepteur")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div>{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "details",
    header: "Details",
    cell: ({ row }) => (
      <div>{row.getValue("details") || "N/A"}</div>
    ),
  },
  {
    accessorKey: "date_et_heure",
    header: "Date et heure",
    cell: ({ row }) => (
      <div>{row.getValue("date_et_heure")}</div>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <button
        onClick={() => handleReply(row.original)}
        className="bg-[#FF9D00] px-4 py-2 rounded"
      >
        Supprimer
      </button>
    ),
  },
];

function handleReply(payment: Payment) {
  alert(`Répondre à : ${payment.numero_emetteur} - Email : ${payment.email}`);
  // Vous pouvez également ouvrir un formulaire ou rediriger l'utilisateur
}

export function Transactions() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      globalFilter,
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <AppContainer className="space-y-4">
      <Spacer tooSmall />
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start gap-3">
        <DashboardTitle title="Transactions" className="m-0" />
        <Input
          placeholder="Rechercher par email ou numéro de téléphone..."
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)} // Mettre à jour le filtre global
          className="max-w-sm p-5"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="text-sm border-b-1">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-b-1">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="whitespace-nowrap max-w-fit overflow-ellipsis">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="text-sm bg-sidebar">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="border-b-1 !text-sm">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Aucun résultat.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Spacer />
    </AppContainer>
  );
}
