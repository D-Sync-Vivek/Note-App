import dbConnect from "@/lib/dbConnect";
import Note from "@/models/Note";

export async function GET() {
  await dbConnect(); // ensures DB collection
  const data = await Note.find();
  return Response.json({ data });
}

export async function POST(request) {
  await dbConnect();

  const body = await request.json();
  const doc = await Note.create({
    title: body.title,
    content: body.content,
  });

  return Response.json({
    success: true,
    message: "Note added successfully",
    data: doc,
  });
}
