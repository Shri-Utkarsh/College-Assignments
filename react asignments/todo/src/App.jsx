import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newtodo) => {
    setTodos([...todos, newtodo])
  }

  return (

    <div className="p-4">
      <h1 className="text-3xl flex justify-center">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>

  );
}

export default App;
