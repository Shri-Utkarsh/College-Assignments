import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="border p-2 my-2 max-w-2xl mx-auto">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
