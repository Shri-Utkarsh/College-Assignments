import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { todos} = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
     
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
