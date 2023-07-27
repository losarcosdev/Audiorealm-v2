"use client";

import { useState } from "react";

interface Props {
  description: string;
}

export const ProductMoreInfo = ({ description }: Props) => {
  const [active, setActive] = useState(true);

  const inTheBox = [
    { name: "Headphone Unit", quantity: 1 },
    { name: "Replacement Earcups", quantity: 2 },
    { name: "3.5mm 5m Audio Cable", quantity: 1 },
    { name: "Travel Bag", quantity: 1 },
    { name: "Headphone Unit", quantity: 1 },
    { name: "Replacement Earcups", quantity: 2 },
    { name: "3.5mm 5m Audio Cable", quantity: 1 },
    { name: "Travel Bag", quantity: 1 },
  ];

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-4 p-2 py-10 md:p-0 md:py-0">
      <div className="flex items-center border-b-2 gap-2">
        <button
          onClick={() => setActive(() => true)}
          className={`text-xl font-bold border-b-4 ${
            active
              ? "border-b-teal-700 text-black"
              : "text-zinc-200 border-transparent"
          } 
          rounded-none py-2 px-5 hover:bg-zinc-100 duration-150`}
        >
          Product Description
        </button>
        <button
          onClick={() => setActive(() => false)}
          className={`text-xl font-bold border-b-4  ${
            !active
              ? "border-b-teal-700 border-b-4 text-black"
              : "text-zinc-200 border-transparent"
          } 
          rounded-none py-2 px-5 hover:bg-zinc-100 duration-150`}
        >
          In The Box
        </button>
      </div>

      {active ? (
        // Info
        <div>
          <p className="text-left text-zinc-500">{description}</p>
        </div>
      ) : (
        // In the Box
        <div>
          <div className="flex flex-col">
            {inTheBox.map(({ name, quantity }, index) => (
              <div className="flex items-center mb-4" key={index}>
                <span className="mr-2 font-bold text-teal-700">
                  {quantity}x
                </span>
                <span className="text-zinc-500">{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
