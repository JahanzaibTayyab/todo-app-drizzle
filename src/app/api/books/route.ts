import { NextRequest, NextResponse } from "next/server";

const books = [
  {
    id: 1,
    name: "Book 1",
  },
  {
    id: 2,
    name: "Book 2",
  },
  ,
  {
    id: 3,
    name: "Book 3",
  },
  ,
  {
    id: 4,
    name: "Book 4",
  },
];

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  if (url.searchParams.has("name")) {
    return new NextResponse(JSON.stringify(books));
  } else {
    const res = new NextResponse();
    // return res.status(404).json("Plz add name");
    return new NextResponse("Plz add name", {
      status: 404,
    });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("🚀 ~ file: route.ts:39 ~ POST ~ body:", body);
  return new NextResponse(JSON.stringify(body));
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  console.log("🚀 ~ file: route.ts:39 ~ PUT ~ body:", body);
  return new NextResponse(JSON.stringify(body));
}

export async function DELETE(request: NextRequest) {
  return new NextResponse(JSON.stringify("Book Delete"));
}
