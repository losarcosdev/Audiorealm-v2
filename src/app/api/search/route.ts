import { NextResponse } from "next/server";

export const GET = async (): Promise<
  NextResponse<{ message: string }> | undefined
> => {
  return NextResponse.json({ message: "Must specify a search term" });
};

export const DELETE = async (): Promise<
  NextResponse<{ message: string }> | undefined
> => {
  return NextResponse.json({ message: "Bad request" }, { status: 400 });
};

export const POST = async (): Promise<
  NextResponse<{ message: string }> | undefined
> => {
  return NextResponse.json({ message: "Bad request" }, { status: 400 });
};

export const PUT = async (): Promise<
  NextResponse<{ message: string }> | undefined
> => {
  return NextResponse.json({ message: "Bad request" }, { status: 400 });
};
