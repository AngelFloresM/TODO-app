import { Request, Response } from "express";

import { Note } from "../db/Models/Note.js";

async function getNoteList(req: Request, res: Response) {
  const todoList = await Note.find({}, "title description done");
  res.json(todoList);
}

async function getSingleNote(req: Request, res: Response) {
  const { id } = req.params;
  const note = await Note.findById(id, "title description");
  res.json(note);
}

async function createNote(req: Request, res: Response) {
  const { title, description } = req.body;

  console.log({ title, description });

  if (!title) {
    return res.json({ message: "There is no TITLE" });
  }

  const newNote = new Note({ title, description });
  await newNote.save();
  return res.json({ message: "Note saved" });
}

async function deleteNote(req: Request, res: Response) {
  const { id } = req.params;

  const deletedItem = await Note.findByIdAndDelete(id);

  if (!deletedItem) return res.json({ message: "There is not such Note id" });
  console.log(deletedItem);
}

async function updateNote(req: Request, res: Response) {
  const { id } = req.params;

  const foundNote = await Note.findById(id);
  console.log(foundNote)
  foundNote.description = "";
  await foundNote.save();
}

export { getNoteList, getSingleNote, createNote, deleteNote, updateNote };
