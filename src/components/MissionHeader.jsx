import React from "react";

const MissionHeader = () => {
  const dateStr = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="mission-header animate-in">
      <div className="header-text">
        <p className="subtitle">Command Center</p>
        <h1>Daily Missions</h1>
        <p className="date-display">{dateStr}</p>
      </div>
      <div className="system-status">
        <div className="status-indicator">
          <span className="pulse-dot"></span>
          <span>System Optimized</span>
        </div>
      </div>

      <style jsx>{`
        .mission-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--panel-border);
          padding-bottom: 1.5rem;
        }
        .date-display {
          color: var(--text-secondary);
          margin-top: 0.5rem;
          font-weight: 300;
        }
        .system-status {
          background: rgba(16, 185, 129, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--success);
          font-size: 0.8rem;
          font-weight: 600;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--success);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--success);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </header>
  );
};

export default MissionHeader;
