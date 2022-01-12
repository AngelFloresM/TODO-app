import mongoose from "mongoose";

async function main() {
  await mongoose.connect("mongodb://localhost:27017/todo", () => {
    console.log("Database Connected")
  });
}

export { main };
