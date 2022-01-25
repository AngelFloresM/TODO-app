import React from "react";
import { motion } from "framer-motion";

import "./Todo.css";

interface TodoStructure {
  title: string;
  description: string;
  id: string;
}

export default function Todo({ title, description, id }: TodoStructure) {
  return (
    <motion.div animate={{ opacity: 1 }} transition={{delay: 0.5}} className="todo-item">
      <p className="todo-title">{title}</p>
      <p className="todo-description">{description}</p>
    </motion.div>
  );
}
