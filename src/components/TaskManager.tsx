import React from "react";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";
import FilterButtons from "../components/FilterButtons";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [filter, setFilter] = useLocalStorage<string>("filter", "all");

  const addTask = (title: string) => {
    const task: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }
    if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 max-w-md bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>
        <AddTaskForm addTask={addTask} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default TaskManager;
