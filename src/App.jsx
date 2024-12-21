import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <TodoProvider>
      <div className="max-w-md mx-auto mt-10 p-4">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do App</h1>
        <TodoForm />
      </div>
    </TodoProvider>
  );
};

export default App;
