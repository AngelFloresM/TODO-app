import { Router, Request, Response } from "express";

import {
  getTODOList,
  getSingleTODO,
  createNewTODO,
  deleteTODO,
} from "../controllers/controller.todo.js";

const route: Router = Router();

route
  .get("/", getTODOList)
  .get("/:id", getSingleTODO)
  .post("/", createNewTODO)
  .delete("/:id", deleteTODO);

export default route;
