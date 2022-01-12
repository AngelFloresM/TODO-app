import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
