import React, { useState } from 'react';
import './Header.css';

function Header({ toggleTheme }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    toggleTheme(newMode);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Task List View</h1>
        <div className="toggle-container">
          <span>🤍</span>
          <label className="toggle-switch">
            <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
            <span className="slider"></span>
          </label>
          <span>🖤</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
