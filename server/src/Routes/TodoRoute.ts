import { Router, Request, Response } from "express";

import {
  getNoteList,
  getSingleNote,
  createNote,
  deleteNote,
} from "../controllers/controller.todo.js";

const route: Router = Router();

route
  .get("/", getNoteList)
  .get("/:id", getSingleNote)
  .post("/", createNote)
  .delete("/:id", deleteNote);

export default route;
