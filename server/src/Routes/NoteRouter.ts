import { Router } from "express";

import {
  getNoteList,
  getSingleNote,
  createNote,
  deleteNote, 
  updateNote,
} from "../controllers/controller.todo.js";

const router: Router = Router();

router.route("/").get(getNoteList).post(createNote);
router.route("/:id").get(getSingleNote).delete(deleteNote).put(updateNote);

export default router;
