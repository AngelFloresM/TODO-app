import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan"

import { main } from "./db/index.js";
import todoRoute from "./Routes/UserRoutes.js";

dotenv.config();

const app: Application = express();
const { PORT } = process.env;

main().catch((err) => {
  console.log(err);
});

app.use(morgan("dev"))
app.use(express.json());
app.use(cors());
app.use("/todo", todoRoute);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Success" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
