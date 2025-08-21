import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../features/todoSlice";

function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  function handleAddChange() {
    dispatch(ADD_TODO(text));
    setText("");
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddChange}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
