import { Router, Response, Request } from "express";

import { TODOModel } from "../db/Models/Todo.js";

const route: Router = Router();

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "User Get Router" });
});

route.post("/", async (req: Request, res: Response) => {
  const { title, description } = req.body;

  if (title) {
    const newTODO = new TODOModel({ title, description });
    await newTODO.save();
    res.json({ message: "TODO guardado" });
  }
  
  res.json({ message: "There is no TITLE" });
});

route.delete("/", (req: Request, res: Response) => {
  res.json({ message: "User Delete Router" });
});

route.put("/", (req: Request, res: Response) => {
  res.json({ message: "User Update Router" });
});

export default route;
