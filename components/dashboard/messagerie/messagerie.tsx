"use client"

import * as React from "react"
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
} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DashboardTitle } from "../../global/dashboard-title"

const data: Payment[] = [
  {
    id: "",
    nom: "Hassan Mahamat",
    numéro_de_téléphone: 686438664,
    date_et_heure: "12/10/2000 14:00",
    email: "hassan99@yahoo.com",
    objet: "Je n'ai pas reçu mon crédit",
    message: "Bonjour je ne pas recu mon crédit",
    action: ""
  },
  {
    id: "",
    nom: "Ali Oumar",
    numéro_de_téléphone: 66468526,
    date_et_heure: "12/10/2000 15:00",
    email: "Ali45@gmail.com",
    objet: "Je n'ai pas pu lancer la requête / paiement",
    message: "Comment ça marche ?",
    action: ""
  },
  {
    id: "",
    nom: "Mahamat dogo",
    numéro_de_téléphone: 88655222,
    date_et_heure: "12/10/2000 16:00",
    email: "Mahamat44@gmail.com",
    objet: "Comment ça marche ?",
    message: "Bonsoir Tossé ",
    action: ""
  },
  {
    id: "",
    nom: "Vincent",
    numéro_de_téléphone: 77777777777,
    date_et_heure: "12/10/2000 17:00",
    email: "vincent@gmail.com",
    objet: "Comment ça marche ?",
    message: "Bonjour monsieur comment allez vous ?",
    action: ""
  },
  {
    id: "",
    nom: "Moussa Ali",
    numéro_de_téléphone: 888888888888,
    date_et_heure: "12/10/2000 18:00",
    email: "moussa@hotmail.com",
    objet: "Comment ça marche ?",
    message: "Salut je voulais que vous m'aidez monsieur.",
    action: ""
  },
]
export type Payment = {
  id: string
  nom: string
  numéro_de_téléphone: number
  date_et_heure: string | null
  email: string
  objet: string
  message: string
  action: string
}


export const columns: ColumnDef<Payment>[] = [
  {
    header: "ID",
    cell: ({ row }) => row.index + 1, 
  },
  {
    accessorKey: "nom",
    header: "Nom",
    cell: ({ row }) => <div className="text-xl">{row.getValue("nom") || "N/A"}</div>,
  },
  {
    accessorKey: "numéro_de_téléphone", 
    header: "Numéro de téléphone",
    cell: ({ row }) => <div className="text-xl">{row.getValue("numéro_de_téléphone")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase text-xl">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "objet",
    header: "Objet",
    cell: ({ row }) => <div className=" text-xl">{row.getValue("objet") || "N/A"}</div>,
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => <div className=" text-xl">{row.getValue("message") || "N/A"}</div>,
  },
  {
    accessorKey: "date_et_heure", 
    header: "Date et heure",
    cell: ({ row }) => <div className="text-xl">{row.getValue("date_et_heure")}</div>,
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
  }
  
]

function handleReply(payment: Payment) {
  // Action à exécuter lors du clic sur le bouton
  alert(`Répondre à : ${payment.nom} - Email : ${payment.email}`);
  // Vous pouvez également ouvrir un formulaire ou rediriger l'utilisateur
}

export function Messagerie() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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
  })

  return (
    <div className="w-full">
      <div className="mt-10 flex justify-between">
        <div className="flex justify-between w-full">
          <DashboardTitle title="Messagerie" className="text-center"/>
          <Input
            placeholder="Rechercher par email ou numéro de téléphone..."
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)} 
            className="max-w-sm mr-10"
          />
        </div>
      </div>
      <div className="rounded-md border p-4 mx-10">
        <Table>
          <TableHeader className="text-xl border-b-1">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className= "border-b-1">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className= "border-b-1">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                Aucun résultat.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
