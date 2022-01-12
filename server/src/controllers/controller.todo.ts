import { Request, Response } from "express";

import { TODO } from "../db/Models/Todo.js";

async function getTODOList(req: Request, res: Response) {
  const todoList = await TODO.find({}, "title description done");
  res.json(todoList);
}

async function getSingleTODO(req: Request, res: Response) {
  const { id } = req.params;
  const todo = await TODO.findById(id, "title description");
  res.json(todo);
}

async function createNewTODO(req: Request, res: Response) {
  const { title, description } = req.body;

  console.log({ title, description });

  // if (!title) {
  //   return res.json({ message: "There is no TITLE" });
  // }

  // const newTODO = new TODO({ title, description });
  // await newTODO.save();
  // return res.json({ message: "TODO saved" });
}

async function deleteTODO(req: Request, res: Response) {
  const { id } = req.params;

  const deletedItem = await TODO.findByIdAndDelete(id);

  if(!deletedItem) return res.json({message: "There is not such TODO id"})
  console.log(deletedItem);
}

async function updateTODO(req: Request, res: Response) {
  const { id } = req.params;

  const foundTODO = await TODO.findById(id);
  foundTODO.description = "";
  await foundTODO.save();
  }

export { getTODOList, getSingleTODO, createNewTODO, deleteTODO };
