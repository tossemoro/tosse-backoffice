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
    nom: "Hassan Mahamat",
    numéro_de_téléphone: 686438664,
    date_et_heure: "12/10/2000 14:00",
    email: "hassan99@yahoo.com",
    objet: "Je n'ai pas reçu mon crédit",
    message: "Bonjour je ne pas recu mon crédit",
    action: "",
  },
  {
    id: "",
    nom: "Ali Oumar",
    numéro_de_téléphone: 66468526,
    date_et_heure: "12/10/2000 15:00",
    email: "Ali45@gmail.com",
    objet: "Je n'ai pas pu lancer la requête / paiement",
    message: "Comment ça marche ?",
    action: "",
  },
  {
    id: "",
    nom: "Vincent",
    numéro_de_téléphone: 77777777777,
    date_et_heure: "12/10/2000 17:00",
    email: "vincent@gmail.com",
    objet: "Comment ça marche ?",
    message: "Bonjour monsieur comment allez vous ?",
    action: "",
  },
  {
    id: "",
    nom: "Moussa Ali",
    numéro_de_téléphone: 888888888888,
    date_et_heure: "12/10/2000 18:00",
    email: "moussa@hotmail.com",
    objet: "Comment ça marche ?",
    message: "Salut je voulais que vous m'aidez monsieur.",
    action: "",
  },
];
export type Payment = {
  id: string;
  nom: string;
  numéro_de_téléphone: number;
  date_et_heure: string | null;
  email: string;
  objet: string;
  message: string;
  action: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    header: "ID",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "nom",
    header: "Nom",
    cell: ({ row }) => (
      <div>{row.getValue("nom") || "N/A"}</div>
    ),
  },
  {
    accessorKey: "numéro_de_téléphone",
    header: "Numéro de téléphone",
    cell: ({ row }) => (
      <div>{row.getValue("numéro_de_téléphone")}</div>
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
    accessorKey: "objet",
    header: "Objet",
    cell: ({ row }) => (
      <div>{row.getValue("objet") || "N/A"}</div>
    ),
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => (
      <div>{row.getValue("message") || "N/A"}</div>
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
        Répondre
      </button>
    ),
  },
];

function handleReply(payment: Payment) {
  alert(`Répondre à : ${payment.nom} - Email : ${payment.email}`);
  // Vous pouvez également ouvrir un formulaire ou rediriger l'utilisateur
}

export function Messagerie() {
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
        <DashboardTitle title="Messagerie" className="m-0" />
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
