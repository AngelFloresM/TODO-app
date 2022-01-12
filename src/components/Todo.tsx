import React from "react";

import "./Todo.css"

interface TodoStructure {
  title: string;
  description: string;
  id: string;
}

export default function Todo({ title, description, id }: TodoStructure) {
  return (
    <div className="todo-item">
      <p className="todo-title">{title}</p>
      <p className="todo-description">{description}</p>
    </div>
  );
}
