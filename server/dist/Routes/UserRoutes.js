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
import { TODOModel } from "../db/Models/Todo.js";
const route = Router();
route.get("/", (req, res) => {
    res.json({ message: "User Get Router" });
});
route.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    if (title) {
        const newTODO = new TODOModel({ title, description });
        yield newTODO.save();
        res.json({ message: "TODO guardado" });
    }
    res.json({ message: "There is no TITLE" });
}));
route.delete("/", (req, res) => {
    res.json({ message: "User Delete Router" });
});
route.put("/", (req, res) => {
    res.json({ message: "User Update Router" });
});
export default route;
