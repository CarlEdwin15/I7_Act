import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("today");

  const addTask = (task) => {
    const due = new Date(task.deadline);
    due.setHours(0, 0, 0, 0);

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title: task.title,
        description: task.description,
        type: task.type,
        completed: false,
        dueDate: due,
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = tasks.length
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0); // "YYYY-MM-DD"

  const pastDueCount = tasks.filter(
    (task) => !task.completed && task.dueDate < today,
  ).length;

  const todayCount = tasks.filter((task) => {
    if (task.completed) return false;

    const taskDate = new Date(task.dueDate);
    taskDate.setHours(0, 0, 0, 0);

    return taskDate.getTime() === today.getTime();
  }).length;

  const incomingCount = tasks.filter(
    (task) => !task.completed && task.dueDate > today,
  ).length;

  const filteredTasks = tasks.filter((task) => {
    const taskDate = new Date(task.dueDate);
    taskDate.setHours(0, 0, 0, 0);

    switch (filter) {
      case "past":
        return !task.completed && taskDate < today;

      case "today":
        return !task.completed && taskDate.getTime() === today.getTime();

      case "incoming":
        return !task.completed && taskDate > today;

      case "completed":
        return task.completed;

      default:
        return true;
    }
  });

  return (
    <div className="app">
      <div className="welcome-bg-container"></div>

      <Navbar />

      <div className="main">
        <LeftPanel
          progress={progress}
          completed={completedCount}
          total={tasks.length}
          pastDueCount={pastDueCount}
          todayCount={todayCount}
          incomingCount={incomingCount}
          setFilter={setFilter}
          activeFilter={filter}
        />

        <TaskList tasks={filteredTasks} toggleTask={toggleTask} activeFilter={filter} />

        <TaskForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
