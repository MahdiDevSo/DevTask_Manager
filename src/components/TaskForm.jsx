import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask(title.trim(), priority);
    setTitle("");
    setPriority("Medium");
  };

  return (
    <form className="glass-card task-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="glass-input"
          placeholder="What needs to be engineered?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-controls">
        <div className="priority-selector">
          {["Low", "Medium", "High"].map((p) => (
            <button
              key={p}
              type="button"
              className={`priority-chip ${p.toLowerCase()} ${
                priority === p ? "active" : ""
              }`}
              onClick={() => setPriority(p)}
            >
              {p}
            </button>
          ))}
        </div>

        <button type="submit" className="glass-btn primary-btn">
          + Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
