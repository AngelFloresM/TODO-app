import {Request, Response} from "express"

import { TODO } from "../db/Models/Todo.js";

async function getAllTODOS(req: Request, res: Response){
  const todos = await TODO.find({});
  res.json(todos);
}

export {getAllTODOS}