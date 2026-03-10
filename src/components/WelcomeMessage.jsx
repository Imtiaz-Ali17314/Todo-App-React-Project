import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoContextItems } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoContextItems);

  return (
    todoItems.length === 0 && <p className={styles.message}>Enjoy Your Day</p>
  );
};

export default WelcomeMessage;
