
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onComplete, onDelete }) => {
    if (tasks.length === 0) {
        return (
            <div className="glass-card empty-state">
                <div className="empty-icon">📂</div>
                <h3>No tasks found</h3>
                <p>Try adjusting your search query or task filters.</p>
            </div>
        );
    }

    return (
        <section className="task-list-container">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onComplete={onComplete}
                    onDelete={onDelete}
                />
            ))}
        </section>
    );
};

export default TaskList;