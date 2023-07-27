import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <section className="md:h-screen py-12 md:py-0 flex flex-col-reverse md:flex-row items-center justify-evenly">
      <div className="flex flex-col gap-3 max-w-lg p-1">
        <h3 className="text-black text-3xl md:text-5xl tracking-tighter font-semibold text-left md:leading-[4rem]">
          BRINGING YOU THE <span className="text-teal-700">BEST </span>
          AUDIO GEAR
        </h3>
        <p className="text-zinc-400">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image
        src={"/model-headphone.jpg"}
        alt="Man showcasing headphones"
        width={800}
        height={800}
        className="w-[600px] h-[400px] md:h-screen"
      />
    </section>
  );
};
