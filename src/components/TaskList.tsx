import React from "react";

const TaskList = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            boxShadow: "0 0 5px gray",
            backgroundColor: task.completed ? "#d4edda" : "white",
            border: task.completed ? "none" : "1px solid gray",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => props.toggleComplete(task.id)}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "1px solid",
                backgroundColor: task.completed ? "green" : "transparent",
              }}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "black",
              }}
            >
              {task.title}
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => props.startEditing(task.id)}
              style={{
                color: "orange",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => props.deleteTask(task.id)}
              style={{
                color: "red",
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
