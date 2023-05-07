import { NextRequest, NextResponse } from "next/server";
export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: number;
    };
  }
) {
  const url = request.nextUrl;
  return NextResponse.json({
    From: params.id,
    Message: "Greetings from Pakistan",
    RequestType: "GET",
  });
}
