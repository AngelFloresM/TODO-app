import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import { main } from "./db/index.js";
import NoteRouter from "./Routes/NoteRouter.js";

dotenv.config();

const app: Application = express();
const { PORT } = process.env;

main().catch((err) => {
  console.log(err);
});

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/todo", NoteRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Success" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// comment too