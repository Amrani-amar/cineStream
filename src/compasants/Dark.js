import React from 'react';

function Dark({ handleClick, darkMode }) {
  return (
    <div className="dark-mode-container">
      <button className="btn-toggle" onClick={handleClick}>
        {darkMode ? "Mode Clair" : "Mode Sombre"}
      </button>
    </div>
  );
}

export default Dark;
