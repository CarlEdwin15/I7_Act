import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Start your day with mindfulness",
      completed: false,
    },
    {
      id: 2,
      title: "30 minutes physical activity",
      completed: true,
    },
    {
      id: 3,
      title: "Healthy breakfast",
      completed: true,
    },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
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

  return (
    <div className="app">
      <Navbar />

      <div className="main">
        <LeftPanel
          progress={progress}
          completed={completedCount}
          total={tasks.length}
        />

        <TaskList tasks={tasks} toggleTask={toggleTask} />

        <TaskForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
