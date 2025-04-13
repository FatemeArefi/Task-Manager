import React from "react";
import { useState } from "react";

const AddTaskForm = (props) => {
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    if (newTask !== "") {
      props.addTask(newTask);
      setNewTask("");
    } else {
      console.log("Task is empty");
    }
  };

  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow">
      <input
        type="text"
        value={newTask}
        onChange={(event) => {
          setNewTask(event.target.value);
        }}
        placeholder="Enter new task..."
        className="p-3 w-full border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        onClick={() => {
          addNewTask();
        }}
        className="p-3 w-full bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
