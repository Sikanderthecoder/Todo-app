import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const [task, setTask] = useState(""); // Local state for the input field
  const { todos, dispatch } = useContext(TodoContext); // Access the context

  // Handle adding a new task
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (task.trim()) {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), task }, 
      });
      setTask(""); 
    }
  };

 
  const handleDelete = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="flex-1 px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </form>

    
      <div>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <span>{todo.task}</span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks yet!</p>
        )}
      </div>
    </div>
  );
};

export default TodoForm;
