import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({ title });
    setTitle("");
  };

  return (
    <div className="right-panel">
      <h3>Create Task</h3>

      <form onSubmit={handleSubmit}>
        <label>Title *</label>
        <input
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="create-btn">Create Task</button>
      </form>
    </div>
  );
}

export default TaskForm;