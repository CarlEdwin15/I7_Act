function TaskList({ tasks, toggleTask }) {
  return (
    <div className="center-panel">
      <h2>Today's Tasks</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task ${task.completed ? "completed" : ""}`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span>{task.title}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;