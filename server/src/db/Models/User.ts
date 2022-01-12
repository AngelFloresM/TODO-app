import mongoose from "mongoose";
const { Schema, model } = mongoose;

interface UserFields {
  name: string;
  email: string;
  password: boolean;
}

const UserSchema = new Schema<UserFields>({
  name: String,
  email: String,
  password: String,
});

const User = model<UserFields>("User", UserSchema);

export { User };
