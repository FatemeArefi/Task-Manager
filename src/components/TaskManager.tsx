import React from "react";
import { useState } from "react";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";
import FilterButtons from "../components/FilterButtons";
import EditTaskForm from "../components/EditTaskForm";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useLocalStorage("filter", "all");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const addTask = (title) => {
    const task = {
      id: new Date().getTime(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const startEditing = (id) => {
    setEditingTaskId(id);
  };

  const saveEdit = (id, newTitle) => {
    setTasks(
      tasks.map((task) => {
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  const taskToEdit = tasks.find((task) => task.id === editingTaskId);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f3f3f3",
      }}
    >
      <div
        style={{
          padding: "20px",
          maxWidth: "400px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Task Manager
        </h1>
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
