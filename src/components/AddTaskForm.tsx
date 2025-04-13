import React from "react";
import { useState } from "react";

const AddTaskForm = (props) => {
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    if (newTask != "") {
      props.addTask(newTask);
      setNewTask("");
    } else {
      console.log("Task is empty");
    }
  };

  return (
    <div
      style={{
        marginBottom: "20px",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 0 5px gray",
      }}
    >
      <input
        type="text"
        value={newTask}
        onChange={(event) => {
          setNewTask(event.target.value);
        }}
        placeholder="Enter new task..."
        style={{
          padding: "10px",
          width: "100%",
          border: "1px solid gray",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={() => {
          addNewTask();
        }}
        style={{
          padding: "10px",
          width: "100%",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
