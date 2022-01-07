import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { main } from "./db/index.js";
import todoRoute from "./Routes/UserRoutes.js";
const app = express();
dotenv.config();
main().catch((err) => {
    console.log(err);
});
app.use(express.json());
app.use(cors());
app.use("/todo", todoRoute);
app.get("/", (req, res) => {
    res.json({ message: "Success" });
});
app.listen(process.env.PORT, () => {
    console.log("http://localhost:8080");
});
