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
    <div className="mb-4 bg-white p-4 rounded-lg shadow">
      <input
        type="text"
        value={newTitle}
        onChange={(event) => {
          setNewTitle(event.target.value);
        }}
        className="p-3 w-full border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring focus:ring-green-300"
      />
      <div className="flex gap-3 mt-3">
        <button
          onClick={() => {
            saveEditedTask();
          }}
          className="flex-1 p-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-600 transition"
        >
          Save
        </button>
        <button
          onClick={() => {
            props.cancelEdit();
          }}
          className="flex-1 p-3 bg-red-700 text-white font-medium rounded-lg hover:bg-red-600 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTaskForm;
