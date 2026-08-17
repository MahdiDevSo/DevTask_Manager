const Header = ({ theme, onToggleTheme }) => {
  return (
    <header className="glass-header">
      <div className="brand-container">
        <div className="brand-logo">
          <span>&lt;/&gt;</span>
        </div>
        <div>
          <h1 className="brand-title">DevTask</h1>
          <p className="brand-subtitle">High-Performance Workflow Manager</p>
        </div>
      </div>

      <button
        className="theme-toggle-btn"
        onClick={onToggleTheme}
        aria-label="Toggle visual theme"
      >
        {theme === "dark" ? (
          <span className="theme-icon">☀️Light</span>
        ) : (
          <span className="theme-icon">🌙 Dark</span>
        )}
      </button>
    </header>
  );
};

export default Header;
