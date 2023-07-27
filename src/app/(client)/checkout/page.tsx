import { getServerSession } from "next-auth";
import Link from "next/link";
import { db } from "@/database";
import User from "@/models/User";
import { IUser } from "@/interfaces";
import { buttonVariants } from "@/components";
import { CheckoutSummary, CheckoutProductList } from "./components";
import { redirect } from "next/navigation";

const CheckoutPage = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/");
  }

  await db.connect();

  const user = (await User.findOne({
    email: session.user.email,
  }).lean()) as IUser;
  const addresses = user?.addresses;

  await db.disconnect();

  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-3 pt-12 px-3 lg:h-screen">
      {/* Products */}
      <div className="flex flex-col flex-1 gap-5">
        <Link
          className={buttonVariants({
            className: "w-fit rounded-[999px]",
            variant: "subtle",
          })}
          href={"/"}
        >
          Home
        </Link>
        <h1 className="font-extrabold text-3xl tracking-tighter text-center lg:text-left">
          SHOPPING CART - CHECKOUT
        </h1>
        <CheckoutProductList />
      </div>

      <CheckoutSummary
        userId={user._id.toString()}
        addresses={JSON.parse(JSON.stringify(addresses) || "[]")}
      />
    </section>
  );
};

export default CheckoutPage;
