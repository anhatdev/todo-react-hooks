import React from "react";
import Todo from "./Todo";

export default function TodoList({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          id={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}
