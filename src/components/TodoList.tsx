import React, { useEffect, useState } from "react";
import todoAPI from "../api/TodoAPI";

import Todo from "./Todo";
import "./TodoList.css"

interface TodoStructure {
  title: string;
  description: string;
  id: string;
}

function TodoList() {
  const [todoList, setTodoList] = useState<TodoStructure[]>([]);
  useEffect(() => {
    todoAPI.getTODOList().then(setTodoList);
  }, []);

  return (
    <div className="todoList-container">
      {todoList.map(({ title, description, id }: TodoStructure) => {
        return <Todo title={title} description={description} id={id} />;
      })}
    </div>
  );
}

export default TodoList;
