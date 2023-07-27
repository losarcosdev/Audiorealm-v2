import { db } from "@/database";
import axios from "axios";
import { NextResponse } from "next/server";
import { IPaypalOrderResponseStatus } from "@/interfaces";
import Order from "@/models/Order";

interface IPaypalBearerToken {
  scope: string;
  access_token: string;
  token_type: string;
  app_id: string;
  expires_in: number;
  nonce: string;
}

const getPaypalBearerToken = async (): Promise<string | null> => {
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const SECRET_PAYPAL = process.env.SECRET_PAYPAL;

  const base64Token = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${SECRET_PAYPAL}`,
    "utf-8"
  ).toString("base64");
  const body = new URLSearchParams("grant_type=client_credentials");

  try {
    const { data } = await axios.post<IPaypalBearerToken>(
      process.env.PAYPAL_OAUTH_URL || "",
      body,
      {
        headers: {
          Authorization: `Basic ${base64Token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return data.access_token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log({ error });
    } else {
      console.log({ error });
    }

    return null;
  }
};

export const POST = async (request: Request) => {
  const paypalBearerToken = await getPaypalBearerToken();

  if (!paypalBearerToken) {
    return NextResponse.json(
      { message: "No paypal token available" },
      { status: 400 }
    );
  }

  const { transactionId = "", orderId = "" } = await request.json();

  const { data } = await axios.get<IPaypalOrderResponseStatus>(
    `${process.env.PAYPAL_ORDERS_URL}/${transactionId}`,
    {
      headers: {
        Authorization: `Bearer ${paypalBearerToken}`,
      },
    }
  );

  if (data.status !== "COMPLETED") {
    return NextResponse.json({ message: "Unknown order " }, { status: 401 });
  }

  await db.connect();

  const dbOrder = await Order.findById(orderId);

  if (!dbOrder) {
    await db.disconnect();
    return NextResponse.json(
      { message: `Not found order in database with id: ${orderId}` },
      { status: 404 }
    );
  }

  if (dbOrder.total !== Number(data.purchase_units[0].amount.value)) {
    await db.disconnect();
    return NextResponse.json(
      { message: "Total price manipulated - Cancelling operation - PAYPAL" },
      { status: 400 }
    );
  }

  dbOrder.transactionId = transactionId;
  dbOrder.isPaid = true;
  await dbOrder.save();

  await db.disconnect();

  return NextResponse.json({ message: paypalBearerToken }, { status: 200 });
};
