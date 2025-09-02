import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema(
  {
    title: {type: String, required: true, trim: true},
    content: {type: String, required: true, trim: true},
  },
  {
    timestamps: true, // adds createdAt, updatedAt.
  }
);

// Reuse existing model if already compiled
const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);
export default Note;