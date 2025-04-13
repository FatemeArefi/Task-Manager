import React from "react";
import { useState } from "react";

const EditTaskForm = (props) => {
  const [newTitle, setNewTitle] = useState(props.currentTitle);

  const saveEditedTask = () => {
    if (newTitle !== "") {
      props.saveEdit(props.taskId, newTitle);
    } else {
      console.log("Title is empty");
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
        value={newTitle}
        onChange={(event) => {
          setNewTitle(event.target.value);
        }}
        style={{
          padding: "10px",
          width: "100%",
          border: "1px solid gray",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      />
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button
          onClick={() => {
            saveEditedTask();
          }}
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            props.cancelEdit();
          }}
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTaskForm;
