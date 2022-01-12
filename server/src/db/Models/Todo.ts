import mongoose from "mongoose";
const { Schema, model, SchemaTypes } = mongoose;

interface TODOFields {
  title: string;
  description: string;
  done: boolean;
  user_id: string
}

const TODOSchema = new Schema<TODOFields>({
  title: String,
  description: String,
  done: {
    type: Boolean,
    default: false,
  },
  user_id: SchemaTypes.ObjectId
});

const TODO = model<TODOFields>("TODO", TODOSchema);

export { TODO };
