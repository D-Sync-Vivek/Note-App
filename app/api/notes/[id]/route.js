import dbConnect from "@/lib/dbConnect";
import Note from '@/models/Note'

export async function DELETE(request, context ){
    console.log("Enter in Delete API")
    await dbConnect();
    const { params } = await context;
    const { id } = await params ;
    console.log("params " + params);
    await Note.findByIdAndDelete(id);
    return Response.json({success: true, message: "Note deleted"});
}

