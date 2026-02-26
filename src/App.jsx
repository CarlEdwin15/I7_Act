import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("today");

  const [modalTask, setModalTask] = useState(null); // new: task for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // modal toggle

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

  const toggleTask = (idOrIds) => {
    if (Array.isArray(idOrIds)) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          idOrIds.includes(task.id)
            ? { ...task, completed: !task.completed }
            : task,
        ),
      );
    } else {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === idOrIds ? { ...task, completed: !task.completed } : task,
        ),
      );
    }
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = tasks.length
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

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

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          activeFilter={filter}
          openModal={(task) => {
            setModalTask(task);
            setIsModalOpen(true);
          }}
        />

        <TaskForm addTask={addTask} />
      </div>

      {/* Modal */}
      {isModalOpen && modalTask && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2>{modalTask.title}</h2>
            <p>
              <strong>Type:</strong> {modalTask.type}
            </p>
            <p>
              <strong>Due Date:</strong>{" "}
              {modalTask.dueDate.toLocaleDateString()}
            </p>
            <p>{modalTask.description}</p>
            <button
              className="create-btn"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
