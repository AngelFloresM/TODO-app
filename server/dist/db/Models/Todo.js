import mongoose from "mongoose";
const { Schema, model } = mongoose;
const TODOSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    done: {
        type: Boolean,
        default: false
    }
});
const TODO = model("TODO", TODOSchema);
export { TODO };
