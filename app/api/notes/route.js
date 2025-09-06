import dbConnect from "@/lib/dbConnect";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect(); // ensures DB collection
  const data = await Note.find();
  return NextResponse.json({ data });
}

export async function POST(request) {
  await dbConnect();

  const body = await request.json();
  const doc = await Note.create({
    title: body.title,
    content: body.content,
  });

  return NextResponse.json({
    success: true,
    message: "Note added successfully",
    data: doc,
  });
}
