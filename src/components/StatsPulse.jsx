import React, { useContext } from "react";
import { TodoContextItems } from "../store/todo-items-store";

const StatsPulse = () => {
  const { todoItems } = useContext(TodoContextItems);
  
  const completedCount = todoItems.filter(i => i.completed).length;
  const totalCount = todoItems.length;
  const completionRate = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <section className="stats-pulse animate-in" style={{ animationDelay: '0.1s' }}>
      <div className="stat-card">
        <span className="stat-label">OPERATIONAL EFFICIENCY</span>
        <div className="stat-value-group">
          <span className="stat-value">{completionRate}%</span>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${completionRate}%` }}></div>
          </div>
        </div>
      </div>

      <div className="stat-grid">
        <div className="mini-stat">
          <span className="mini-label">DEPLOYED</span>
          <span className="mini-value">{totalCount}</span>
        </div>
        <div className="mini-stat resolved">
          <span className="mini-label">RESOLVED</span>
          <span className="mini-value">{completedCount}</span>
        </div>
        <div className="mini-stat pending">
          <span className="mini-label">ACTIVE</span>
          <span className="mini-value">{totalCount - completedCount}</span>
        </div>
      </div>

      <style jsx>{`
        .stats-pulse {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--panel-border);
          padding: 2rem;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.2);
        }
        .stat-label { 
          color: var(--accent-primary); 
          font-size: 0.7rem; 
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 1rem; 
        }
        .stat-value { 
          font-size: 2.8rem; 
          font-weight: 800; 
          color: #fff;
          margin-bottom: 1rem; 
        }
        .progress-track {
          height: 8px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--panel-border);
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          box-shadow: 0 0 15px var(--accent-primary);
          transition: width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .mini-stat {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--panel-border);
          padding: 1.2rem;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }
        .mini-stat:hover {
          background: rgba(255, 255, 255, 0.06);
          transform: translateY(-5px);
        }
        .mini-label { 
          display: block; 
          color: var(--text-secondary); 
          font-size: 0.6rem; 
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 0.5rem; 
        }
        .mini-value { 
          font-weight: 800; 
          font-size: 1.8rem; 
          color: #fff;
        }
        .resolved .mini-value { color: var(--success); }
        .pending .mini-value { color: var(--accent-primary); }

        @media (max-width: 600px) {
          .stats-pulse { grid-template-columns: 1fr; }
          .stat-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  );
};

export default StatsPulse;
