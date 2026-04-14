import "./App.css";
import MissionHeader from "./components/MissionHeader";
import TaskCommandCenter from "./components/TaskCommandCenter";
import MissionStream from "./components/MissionStream";
import Sidebar from "./components/Sidebar";
import StatsPulse from "./components/StatsPulse";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <MissionHeader />
          <StatsPulse />
          <TaskCommandCenter />
          <MissionStream />
        </main>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;

