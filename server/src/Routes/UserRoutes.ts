import { Router, Response, Request } from "express";

import { TODO } from "../db/Models/Todo.js";
import {getAllTODOS} from "../controllers/controller.todo.js"

const route: Router = Router();

route.get("/", getAllTODOS);

route.post("/", async (req: Request, res: Response) => {
  const { title, description } = req.body;

  if (!title) {
    return res.json({ message: "There is no TITLE" });
  }

  const newTODO = new TODO({ title, description });
  await newTODO.save();
  res.json({ message: "TODO guardado" });
});

route.delete("/", (req: Request, res: Response) => {
  res.json({ message: "User Delete Router" });
});

route.put("/", async (req: Request, res: Response) => {
  const todos = await TODO.find({});
});

export default route;
