import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_TODO, TOGGLE_TODO } from "../features/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(TOGGLE_TODO(todo.id))}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(DELETE_TODO(todo.id))}>Delete</button>
    </div>
  );
}

export default TodoItem;
