import "./App.css";
import TodoName from "./components/TodoName";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItem";
import Container from "./components/Container";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <Container>
        <TodoName></TodoName>
        <TodoInput></TodoInput>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </Container>
    </TodoItemsContextProvider>
  );
}

export default App;
