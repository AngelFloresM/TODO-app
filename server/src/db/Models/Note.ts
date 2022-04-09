import mongoose from "mongoose";
const { Schema, model, SchemaTypes } = mongoose;

interface NoteFields {
  title: string;
  description: string;
  done: boolean;
  user_id: string
}

const NoteSchema = new Schema<NoteFields>({
  title: String,
  description: String,
  done: {
    type: Boolean,
    default: false,
  },
  user_id: SchemaTypes.ObjectId
});

const Note = model<NoteFields>("Note", NoteSchema);

export { Note };
