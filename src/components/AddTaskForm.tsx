import React, { useState } from "react";

interface AddTaskFormProps {
  addTask: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task..."
        className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        onClick={handleAddTask}
        className="mt-3 w-full p-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
