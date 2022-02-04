import React, { MouseEvent } from "react";
import { motion } from "framer-motion";

import "./Note.css";
import NoteAPI from "../api/NoteAPI";

interface TodoStructure {
  title: string;
  description: string;
  id: string;
}

export default function Todo({ title, description, id }: TodoStructure) {
  const selectNoteHandler = async (event: MouseEvent<HTMLDivElement>) => {
    const Note = await NoteAPI.getSingleNote(id)
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="todo-item"
      onClick={selectNoteHandler}
    >
      <p className="todo-title">{title}</p>
      <p className="todo-description">{description}</p>
    </motion.div>
  );
}
