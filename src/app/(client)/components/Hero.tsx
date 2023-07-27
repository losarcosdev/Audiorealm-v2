import { buttonVariants } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="h-screen w-full flex items-center justify-around gradient-bg">
      {/* Hero Section */}
      <div className="flex gap-4 flex-col p-3">
        <h1 className="md:hidden flex text-center text-white font-semibold text-5xl">
          AudioRealm
        </h1>
        <p className="font-extralight text-xl text-white">NEW PRODUCT</p>
        <h2 className="font-semibold text-4xl lg:text-5xl text-white leading-10 lg:leading-[4rem]">
          EDIFIER W820NB <br /> HEADPHONES
        </h2>
        <p className="text-white font-extralight">
          Experience natural, lifelike audio and exceptional <br /> build
          quality made for the passionate music <br /> enthusiast.
        </p>
        <Link
          href={"/edifier_w820nb"}
          className={buttonVariants({
            variant: "custom",
            className:
              "w-full border-[1px] border-teal-700 text-teal-700 hover:opacity-75",
          })}
        >
          SEE PRODUCT
        </Link>
      </div>
      <div className="hidden lg:flex">
        <Image
          alt="An image showcasing the best headphones"
          src={"/hero-headphone.png"}
          width={200}
          height={400}
          className="w-[550px] h-[499px]"
        />
      </div>
    </section>
  );
};
