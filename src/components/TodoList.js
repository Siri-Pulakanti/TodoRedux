import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div>
      <h3>My Todos</h3>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </div>
  );
}

export default TodoList;
