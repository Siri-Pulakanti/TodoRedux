import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App" style={{ textAlign: "center", marginTop: "30px" }}>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
