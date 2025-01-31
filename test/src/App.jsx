import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import InputsSearch from "./components/Inputs";
import FiltredItems from "./components/FiltredItems";
import AddForm from "./components/AddForm";

function App() {
  const [input, setInput] = useState("");
  const [todoInput, setTodoInput] = useState("");
  const [num, setNum] = useState("");
  const [todos, setTodos] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((response) => {
        setTodos(response.data.todos);
      })
      .catch(() => {
        console.log("Apida Xatolik");
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  const filterTodo = todos.filter((item) => {
    return (
      item.todo.toLowerCase().includes(input.toLowerCase()) &&
      item.todo.length > num
    );
  });

  const addTodo = () => {
    if (todoInput.trim()) {
      const newTodo = {
        id: todos.length + 1,
        todo: todoInput,
        completed: false,
        userId: 1,
      };
      setTodos([newTodo, ...todos]);
      setTodoInput("");
    }
  };
  const Delete = (delId) => {
    const delTodos = filterTodo.filter((item) => item.id !== delId);
    setTodos(delTodos);
  };

  const isDone = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-[1440px] m-auto pt-10">
      <AddForm
        todoInput={todoInput}
        addTodo={addTodo}
        setTodoInput={setTodoInput}
      />
      <InputsSearch
        input={input}
        num={num}
        setNum={setNum}
        setInput={setInput}
      />
      <h1 className="text-center text-3xl  font-bold font-mono my-2">
        {loader ? "Loading......" : "Umumiy son:" + filterTodo.length}
      </h1>
      <FiltredItems filterTodo={filterTodo} isDone={isDone} Delete={Delete} />
    </div>
  );
}

export default App;
