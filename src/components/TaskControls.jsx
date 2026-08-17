const TaskControls = ({
  searchTerm,
  onSearchChange,
  priorityFilter,
  onFilterChange,
}) => {
  const priorities = ["All", "High", "Medium", "Low"];

  return (
    <div className="controls-panel glass-panel">
      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="glass-input search-input"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filter-pills">
        {priorities.map((p) => (
          <button
            key={p}
            className={`pill ${priorityFilter === p ? "active" : ""}`}
            onClick={() => onFilterChange(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskControls;
