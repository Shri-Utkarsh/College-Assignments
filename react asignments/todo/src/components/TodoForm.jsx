import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (todo) {
        addTodo(todo);
        setTodo("");
      }
    };
    return (
        <>
      <div>
 
        <form onSubmit={handleSubmit}>
          <div className=" flex justify-center gap-2">
            <input
              type="text"
              name="todo"
              className="border"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="border rounded-full p-2 ">Add</button>
          </div>
        </form>
      </div>
      </>
    );
  };

export default TodoForm;


