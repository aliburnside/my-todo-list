import React, { useState } from "react";
import TodoInputForm from "./components/TodoInputForm";
import TodoList from "./components/TodoList";

import "./App.css";

const initialTodo: Todo[] = [
  {
    text: "Make a Todo List",
  },
];

function App() {
  const [todo, setTodo] = useState(initialTodo);
  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text };
    setTodo([...todo, newTodo]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>Todo List</div>
        <TodoInputForm addTodo={addTodo} />
        <TodoList todo={todo} />
      </header>
    </div>
  );
}

export default App;
