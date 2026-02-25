function TaskList({ tasks, toggleTask, activeFilter }) {
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

  return (
    <div className="center-panel">
      <h2 className={`task-title ${titleColors[activeFilter]}`}>
        {titles[activeFilter]}
      </h2>

      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>No tasks yet.</p>
            <span>Create a task to get started</span>
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`task-row ${task.completed ? "completed" : ""}`}
            >
              <label className="task-item">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span className="task-text">{task.title}</span>
              </label>
              <div className="task-divider"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;