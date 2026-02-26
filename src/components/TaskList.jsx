import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function TaskList({ tasks, toggleTask, activeFilter, openModal }) {
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    setSelectedTasks([]);
  }, [activeFilter]);

  const titles = {
    past: "Past Due Tasks",
    today: "Today's Tasks",
    incoming: "Incoming Tasks",
    completed: "Completed Tasks",
  };

  const titleColors = {
    past: "title-pink",
    today: "title-purple",
    incoming: "title-yellow",
    completed: "title-green",
  };

  const handleTaskClick = (id) => {
    setSelectedTasks((prev) =>
      prev.includes(id)
        ? prev.filter((taskId) => taskId !== id)
        : [...prev, id],
    );
  };

  const handleConfirmAction = () => {
    toggleTask(selectedTasks);
    setSelectedTasks([]);
  };

  const isCompletedFilter = activeFilter === "completed";

  return (
    <div className="center-panel">
      <div className="task-header">
        <h2 className={`task-title ${titleColors[activeFilter]}`}>
          {titles[activeFilter]}
        </h2>

        {selectedTasks.length > 0 && (
          <button className="confirm-btn" onClick={handleConfirmAction}>
            {isCompletedFilter ? "Mark as Incomplete" : "Mark as Completed"}
          </button>
        )}
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>No tasks yet.</p>
            <span>Create a task to get started</span>
          </div>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-row">
              <div className="task-item">
                <div
                  className={`fa-checkbox ${selectedTasks.includes(task.id) ? "checked" : ""}`}
                  onClick={() => handleTaskClick(task.id)}
                >
                  <FontAwesomeIcon
                    icon={
                      selectedTasks.includes(task.id) ? faSquareCheck : faSquare
                    }
                  />
                </div>

                <span
                  className={`task-text ${
                    selectedTasks.includes(task.id) ? "disabled-text" : ""
                  }`}
                  onClick={() => {
                    if (!selectedTasks.includes(task.id)) {
                      openModal(task);
                    }
                  }}
                >
                  {task.title} - {task.dueDate.toLocaleDateString()}{" "}
                  {task.dueDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              <div className="task-divider"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
