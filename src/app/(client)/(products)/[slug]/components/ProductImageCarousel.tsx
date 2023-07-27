"use client";
import "react-slideshow-image/dist/styles.css";
import { Icons } from "@/components";
import Image from "next/image";

interface Props {
  image: string;
}

export function ProductImageCarousel({ image }: Props) {
  if (!image) {
    return (
      <div
        aria-label="Product Placeholder"
        role="img"
        aria-roledescription="placeholder"
        className="flex aspect-square h-[500px] w-full md:w-96 flex-1 items-center justify-center bg-zinc-100"
      >
        <Icons.placeholder
          className="h-9 w-9 text-muted-foreground"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <Image
      alt={image}
      src={image}
      key={image}
      width={500}
      height={500}
      className="w-[450px] h-[450px]"
    />
  );
}
