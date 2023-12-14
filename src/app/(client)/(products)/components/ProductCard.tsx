"use client";
import { ProductResponse } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

interface Props {
  product: ProductResponse;
}

export const ProductCard = ({ product }: Props) => {
  const [hovered, setHovered] = useState(false);

  const productImage = useMemo(
    () => (hovered ? product.images[1] : product.images[0]),
    [hovered, product.images]
  );

  return (
    <Link
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={product.slug}
      className={`flex flex-col items-center gap-2 border-[1.5px]
       border-zinc-100 hover:border-[1.5px] hover:border-zinc-900
       active:scale-95 active:border-zinc-100 focus:outline-none focus:ring-2 
       focus:ring-zinc-900 focus:ring-offset-2 duration-200 mb-4 w-full
       `}
      key={product.slug}
    >
      <div>
        <Image
          alt={product.title}
          width={300}
          height={300}
          src={productImage}
          className="w-[300px] h-[300px] object-contain"
        />
      </div>
      <div className="flex items-center justify-center flex-col w-full bg-zinc-100 h-full p-5">
        <p className="font-bold">{product.title}</p>
        <p>${product.price}</p>
      </div>
    </Link>
  );
};
