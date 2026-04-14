import React, { useContext } from "react";
import { TodoContextItems } from "../store/todo-items-store";

const Sidebar = () => {
  const { filter, setFilter } = useContext(TodoContextItems);

  const categories = [
    { name: "All Tasks", icon: "◈" },
    { name: "High Priority", icon: "▲" },
    { name: "Deep Work", icon: "⚛" },
    { name: "Shallow Work", icon: "≋" },
    { name: "Completed", icon: "✔" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-orb"></div>
        <span>ZENITH</span>
      </div>
      
      <nav className="sidebar-nav">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className={`nav-item ${filter === cat.name ? 'active' : ''}`}
            onClick={() => setFilter(cat.name)}
          >
            <span className="nav-icon">{cat.icon}</span>
            <span className="nav-text">{cat.name}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">JD</div>
          <div className="user-info">
            <p className="username">Elite User</p>
            <p className="status">Flow State: Active</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sidebar {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          background: #05070a; /* Ensure solid background for contrast */
          border-right: 1px solid var(--panel-border);
        }
        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: 2px;
          color: var(--text-primary);
        }
        .logo-orb {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 50%;
          box-shadow: 0 0 15px var(--accent-primary);
        }
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .nav-item:hover {
          background: rgba(255, 255, 255, 0.08); /* Higher visibility hover */
          color: var(--text-primary);
        }
        .nav-item.active {
          background: rgba(0, 229, 255, 0.15); /* More visible active state */
          color: var(--accent-primary);
          font-weight: 600;
        }
        .nav-icon {
          font-size: 1.2rem;
        }
        .sidebar-footer {
          margin-top: auto;
          padding: 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid var(--panel-border);
        }
        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .avatar {
          width: 36px;
          height: 36px;
          background: var(--accent-secondary);
          border-radius: 8px;
          display: grid;
          place-items: center;
          font-weight: 600;
          color: white;
        }
        .user-info { overflow: hidden; }
        .username { 
          font-weight: 600; 
          font-size: 0.85rem; 
          color: white;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .status { font-size: 0.7rem; color: var(--success); }
      `}</style>
    </aside>
  );
};

export default Sidebar;
