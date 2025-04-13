import { useState } from "react";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";
import FilterButtons from "../components/FilterButtons";
import EditTaskForm from "../components/EditTaskForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Task } from "../types/Task";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useLocalStorage("filter", "all");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  const addTask = (title: string) => {
    const task = {
      id: new Date().getTime(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task: Task) => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task: Task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const startEditing = (id: number) => {
    setEditingTaskId(id);
  };

  const saveEdit = (id: number, newTitle: string) => {
    setTasks(
      tasks.map((task: Task) => {
        if (task.id === id) {
          return { ...task, title: newTitle };
        }
        return task;
      })
    );
    setEditingTaskId(null);
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
  };

  const filteredTasks = tasks.filter((task: Task) => {
    if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  const taskToEdit = tasks.find((task: Task) => task.id === editingTaskId);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 max-w-md bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>
        {editingTaskId && taskToEdit ? (
          <EditTaskForm
            taskId={taskToEdit.id}
            currentTitle={taskToEdit.title}
            saveEdit={saveEdit}
            cancelEdit={cancelEdit}
          />
        ) : (
          <>
            <AddTaskForm addTask={addTask} />
            <FilterButtons filter={filter} setFilter={setFilter} />
            <TaskList
              tasks={filteredTasks}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              startEditing={startEditing}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
