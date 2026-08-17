
const TaskStats = ({ tasks }) => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

    return (
        <section className="stats-grid">
            <div className="glass-card stat-card">
                <span className="stat-label">Total Backlog</span>
                <h2 className="stat-value">{total}</h2>
                <span className="stat-subtext">Active items</span>
            </div>

            <div className="glass-card stat-card">
                <span className="stat-label">Completed</span>
                <h2 className="stat-value text-success">{completed}</h2>
                <span className="stat-subtext">Done & verified</span>
            </div>

            <div className="glass-card stat-card">
                <span className="stat-label">Pending</span>
                <h2 className="stat-value text-warning">{pending}</h2>
                <span className="stat-subtext">Requires action</span>
            </div>

            <div className="glass-card stat-card stat-card-progress">
                <div className="progress-header">
                    <span className="stat-label">Efficiency</span>
                    <span className="progress-percentage">{progress}%</span>
                </div>
                <div className="progress-bar-track">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default TaskStats;