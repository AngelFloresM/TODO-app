var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import { TODO } from "../db/Models/Todo.js";
import { getAllTODOS } from "../controllers/controller.todo.js";
const route = Router();
route.get("/", getAllTODOS);
route.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    if (!title) {
        return res.json({ message: "There is no TITLE" });
    }
    const newTODO = new TODO({ title, description });
    yield newTODO.save();
    res.json({ message: "TODO guardado" });
}));
route.delete("/", (req, res) => {
    res.json({ message: "User Delete Router" });
});
route.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield TODO.find({});
}));
export default route;
