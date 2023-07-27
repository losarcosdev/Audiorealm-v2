"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components";
import Link from "next/link";
import Image from "next/image";

export type Order = {
  id?: string;
  product: {
    title: string;
    image: string;
  };
  status: string;
  price: string;
};

export const columns: ColumnDef<Order>[] = [
  {
    header: "Product",
    cell: ({ row: { original } }) => {
      const { product } = original;

      return (
        <div className="flex items-center gap-2">
          <Image
            alt={product.title}
            src={`${product.image}`}
            width={60}
            height={60}
          />
          <p className="font-semibold">{product.title}</p>
        </div>
      );
    },
  },
  {
    header: "Payment Status",
    cell: ({ row: { original } }) => {
      return (
        <div className="flex flex-col">
          {original.status === "Paid" ? (
            <span className="p-2 rounded-[999px] border-green-500 border-[1.5px] text-green-500 font-medium w-32 text-center">
              Paid
            </span>
          ) : (
            <span className="p-2 rounded-[999px] border-orange-500 border-[1.5px] text-orange-500 font-medium w-32 text-center">
              Pending
            </span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="font-sans">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(order.id!)}
              className="cursor-pointer"
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/checkout/${order.id!}`} target="_blank">
                View order details
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
