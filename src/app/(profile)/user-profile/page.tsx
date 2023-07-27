import React from "react";
import Image from "next/image";
import { Icons } from "@/components";
import { AddNewAddress, AddressesList } from "./components";
import { getServerSession } from "next-auth";
import { db } from "@/database";
import User from "@/models/User";
import { IAddress } from "@/interfaces";

const UserProfilePage = async () => {
  const session = await getServerSession();

  await db.connect();
  const { _id, addresses } = (await User.findOne({
    email: session?.user?.email,
  })
    .lean()
    .select("addresses")) as { _id: string; addresses: IAddress[] };
  await db.disconnect();

  return (
    <div className="sm:pl-72 pt-12 lg:container flex flex-col max-w-7xl gap-5">
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
        <h1 className="text-3xl tracking-tighter font-semibold">
          YOUR PROFILE
        </h1>
        <h2 className="text-xl tracking-tighter font-semibold text-zinc-300">
          SETTINGS
        </h2>
      </div>
      <div className="bg-zinc-50 rounded-sm shadow-sm w-full flex items-center gap-5 p-5">
        {session?.user?.image ? (
          <Image
            alt={`${session.user.name}`}
            src={`${session.user.image}`}
            height={40}
            width={40}
            className="rounded-full w-24 h-24"
          />
        ) : (
          <Icons.user />
        )}
        <div>
          <p className="font-semibold text-zinc-600">{session?.user?.name}</p>
          <p className="text-zinc-500">{session?.user?.email}</p>
        </div>
      </div>
      <div className="bg-zinc-50 rounded-sm shadow-sm w-full p-5 flex flex-col items-center gap-3">
        <h3 className="text-xl tracking-tighter font-semibold text-center w-full">
          ADDRESSES
        </h3>
        {/* Add new address */}
        <AddNewAddress userId={_id.toString()} />
        {/* List of addresses */}
        {addresses?.length ? (
          <AddressesList addresses={addresses} />
        ) : (
          <h5>No addresess yet</h5>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
