import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Categories {
  image: string;
  category: string;
  url: string;
}

export const Categories = () => {
  const productCategories: Categories[] = [
    {
      image: "/categories-section/headphone.png",
      category: "Headphones",
      url: "/headphones",
    },
    {
      image: "/categories-section/speaker.png",
      category: "Speakers",
      url: "/speakers",
    },
    {
      image: "/categories-section/earphone.png",
      category: "Earphones",
      url: "/earphones",
    },
  ];

  return (
    <section className="container flex flex-col gap-10 lg:gap-0 lg:flex-row py-5 lg:py-0 lg:h-screen max-w-7xl mx-auto justify-around items-center md:px-[4.5rem]">
      {productCategories.map(({ image, category, url }) => (
        <Link
          href={url}
          key={category}
          className={`p-10 px-16 lg:px-24 bg-zinc-50 hover:bg-zinc-100 duration-150
          flex flex-col gap-3 rounded-sm items-center justify-center
          active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 group m-1 w-full
          `}
        >
          <Image
            alt={category}
            width={300}
            height={300}
            src={image}
            className="w-[200px] h-[200px] object-contain"
          />

          <p className="font-semibold uppercase tracking-tighter">{category}</p>
          <p className="flex items-center justify-center gap-1 font-semibold text-zinc-400">
            SHOP
            <ChevronRight className="text-teal-700 inline-block transition-transform group-hover:translate-x-1" />
          </p>
        </Link>
      ))}
    </section>
  );
};
