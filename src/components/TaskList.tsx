import React from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  deleteTask,
  toggleComplete,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex items-center justify-between p-4 mb-3 rounded-lg shadow transition ${
            task.completed ? "bg-green-100" : "bg-white border border-gray-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleComplete(task.id)}
              className={`w-6 h-6 rounded-full border ${
                task.completed
                  ? "bg-green-500 border-green-500"
                  : "border-gray-300"
              }`}
            />
            <span
              className={`${
                task.completed ? "line-through text-gray-500" : "text-gray-900"
              }`}
            >
              {task.title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700 transition"
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
