import React from "react";

const TaskList = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between items-center p-4 mb-3 rounded-lg shadow ${
            task.completed ? "bg-green-100" : "bg-white border border-gray-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => props.toggleComplete(task.id)}
              className={`w-6 h-6 rounded-full border ${
                task.completed
                  ? "bg-green-500 border-green-500"
                  : "border-gray-300"
              }`}
            />
            <span
              className={`${
                task.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {task.title}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => props.startEditing(task.id)}
              className="text-yellow-500 hover:text-yellow-600 transition"
            >
              Edit
            </button>
            <button
              onClick={() => props.deleteTask(task.id)}
              className="text-red-500 hover:text-red-600 transition"
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
