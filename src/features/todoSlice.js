import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    ADD_TODO: (state, action) => {
      state.todos.push({
        id: nanoid(6),
        text: action.payload,
        completed: false,
      });
    },
    TOGGLE_TODO: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    DELETE_TODO: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});

export const { ADD_TODO, TOGGLE_TODO, DELETE_TODO } = todoSlice.actions;

export default todoSlice.reducer;
