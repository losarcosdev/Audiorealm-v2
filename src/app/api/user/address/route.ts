import { db } from "@/database";
import { IAddress } from "@/interfaces";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { userId, ...address } = await request.json();

  if (!userId) {
    return NextResponse.json(
      { message: "Unauthorized - please login" },
      { status: 401 }
    );
  }

  await db.connect();
  const userAddress = address as IAddress;
  const user = await User.findOne({ _id: userId });

  if (!user) {
    await db.disconnect();
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  user.addresses = [...user.addresses, userAddress];

  await user.save();
  await db.disconnect();

  return NextResponse.json(
    { message: "Address added successfully" },
    { status: 201 }
  );
};
