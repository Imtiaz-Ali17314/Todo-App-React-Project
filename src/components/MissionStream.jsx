import React, { useContext } from "react";
import { TodoContextItems } from "../store/todo-items-store";
import TaskNode from "./TaskNode";

const MissionStream = () => {
  const { todoItems, filter } = useContext(TodoContextItems);

  const filteredItems = todoItems.filter((item) => {
    if (filter === "All Tasks") return true;
    if (filter === "High Priority") return item.priority === "High";
    if (filter === "Deep Work") return item.category === "Work";
    if (filter === "Shallow Work") return item.category === "Personal";
    if (filter === "Completed") return item.completed;
    return true;
  });

  return (
    <div className="mission-stream animate-in" style={{ animationDelay: '0.3s' }}>
      <div className="stream-header">
        <h3>{filter.toUpperCase()}</h3>
        <span className="count-tag">{filteredItems.length}</span>
      </div>
      
      {filteredItems.length === 0 ? (
        <div className="empty-state">
          <div className="empty-orb"></div>
          <p>Mission parameters clear. No active targets in this sector.</p>
        </div>
      ) : (
        <div className="task-list">
          {filteredItems.map((item) => (
            <TaskNode key={item.id} item={item} />
          ))}
        </div>
      )}

      <style jsx>{`
        .mission-stream {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 1rem;
        }
        .stream-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--text-secondary);
          font-size: 0.75rem;
          letter-spacing: 1.5px;
        }
        .count-tag {
          background: var(--accent-primary);
          color: #000;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 800;
          font-size: 0.7rem;
        }
        .task-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .empty-state {
          text-align: center;
          padding: 6rem 2rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          border: 1px dashed var(--panel-border);
        }
        .empty-orb {
          width: 50px;
          height: 50px;
          margin: 0 auto 1.5rem;
          background: radial-gradient(circle, var(--panel-border) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default MissionStream;
