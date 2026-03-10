import { useContext } from "react";
import { TodoContextItems } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

const TodoItems = ({ handleDeleteItem }) => {
  const { todoItems } = useContext(TodoContextItems);

  return (
    <div className="todoItem">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          name={item.name}
          dueDate={item.dueDate}
          handleOnDeleteClick={handleDeleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
