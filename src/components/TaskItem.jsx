
const TaskItem = ({ task, onComplete, onDelete }) => {
    return (
        <div className={`glass-card task-item ${task.completed ? "completed" : ""}`}>
            <div className="task-content">
                <button
                    className={`checkbox-btn ${task.completed ? "checked" : ""}`}
                    onClick={() => onComplete(task.id)}
                    aria-label="Toggle completion state"
                >
                    {task.completed ? "✓" : ""}
                </button>

                <div className="task-details">
                    <h3 className="task-title">{task.title}</h3>
                    <div className="task-meta">
                        <span className={`badge priority-badge ${task.priority.toLowerCase()}`}>
                            {task.priority} Priority
                        </span>
                        <span className="task-status-tag">
                            {task.completed ? "Done" : "In Progress"}
                        </span>
                    </div>
                </div>
            </div>

            <div className="task-actions">
                <button
                    className="glass-btn action-btn complete-btn"
                    onClick={() => onComplete(task.id)}
                >
                    {task.completed ? "Reopen" : "Complete"}
                </button>
                <button
                    className="glass-btn action-btn delete-btn"
                    onClick={() => onDelete(task.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;