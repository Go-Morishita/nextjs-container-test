import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const password = process.env.PASSWORD;

  if (!password) {
    return NextResponse.json({ error: "PASSWORD not set" }, { status: 500 });
  }

  return NextResponse.json({ password });
}
