import { useState } from "react";
import { TodoProvider } from "./components/TodoContext";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
      <TodoProvider>
        <div className="app">
          <h1>Todo List</h1>
          <TodoForm/>
          <TodoList/>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
