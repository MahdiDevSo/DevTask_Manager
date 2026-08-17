const TaskFilters = ({
  searchQuery,
  onSearchChange,
  priorityFilter,
  onPriorityChange,
  statusFilter,
  onStatusChange,
}) => {
  return (
    <div className="glass-card filter-toolbar">
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="glass-input search-input"
          placeholder="Real-time task search..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button className="clear-btn" onClick={() => onSearchChange("")}>
            ×
          </button>
        )}
      </div>

      <div className="filter-group">
        <div className="filter-pills">
          <span className="filter-label">Priority:</span>
          {["All", "High", "Medium", "Low"].map((level) => (
            <button
              key={level}
              className={`filter-pill ${
                priorityFilter === level ? "active" : ""
              }`}
              onClick={() => onPriorityChange(level)}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="filter-pills">
          <span className="filter-label">Status:</span>
          {["All", "Pending", "Completed"].map((status) => (
            <button
              key={status}
              className={`filter-pill ${
                statusFilter === status ? "active" : ""
              }`}
              onClick={() => onStatusChange(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskFilters;
