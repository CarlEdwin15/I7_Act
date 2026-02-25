import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [until, setUntil] = useState("");
  const [repeatDays, setRepeatDays] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !deadline) return;

    addTask({ title, deadline, description, type, repeatDays, until });
    setTitle("");
    setDeadline("");
    setDescription("");
    setType("");
    setUntil("");
    setRepeatDays({
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
    });
  };

  return (
    <div className="right-panel">
      <form onSubmit={handleSubmit}>
        <label>
          Deadline <span>*</span>
        </label>
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />

        <label>
          Title <span>*</span>
        </label>
        <input
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>
          Description <span>*</span>
        </label>
        <textarea
          placeholder="Enter decription..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>
          Type <span>*</span>
        </label>
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="">Select type...</option>
          <option value="habit">Habit</option>
          <option value="personal">Personal</option>
          <option value="urgent">Urgent</option>
        </select>

        <label>Select Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select a type...</option>
          <option value="work">Habit</option>
          <option value="personal">Personal</option>
          <option value="urgent">Urgent</option>
        </select>

        <label>Repeat Every</label>

        <div className="repeat-container">
          {Object.keys(repeatDays).map((day) => (
            <div key={day} className="repeat-item">
              <input
                type="checkbox"
                checked={repeatDays[day]}
                onChange={(e) =>
                  setRepeatDays({
                    ...repeatDays,
                    [day]: e.target.checked,
                  })
                }
              />
              <span>{day.slice(0, 3).toUpperCase()}</span>
            </div>
          ))}
        </div>

        <label>Until</label>
        <input
          type="date"
          value={until}
          onChange={(e) => setUntil(e.target.value)}
        />

        <button className="create-btn">Create Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
