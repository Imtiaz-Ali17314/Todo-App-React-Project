import { createContext, useReducer, useState } from "react";

const INITIAL_STATE = JSON.parse(localStorage.getItem("zenith_tasks")) || [];

export const TodoContextItems = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
  toggleItem: () => {},
  filter: "All Tasks",
  setFilter: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  switch (action.type) {
    case "NEW_ITEM":
      newTodoItems = [
        ...currTodoItems,
        {
          id: Date.now(),
          name: action.payload.todoItemName,
          dueDate: action.payload.todoDueDate,
          priority: action.payload.priority || "Medium",
          category: action.payload.category || "Work",
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ];
      break;
    case "DELETE_ITEM":
      newTodoItems = currTodoItems.filter((item) => item.id !== action.payload.id);
      break;
    case "TOGGLE_ITEM":
      newTodoItems = currTodoItems.map((item) =>
        item.id === action.payload.id ? { ...item, completed: !item.completed } : item
      );
      break;
    default:
      return currTodoItems;
  }
  localStorage.setItem("zenith_tasks", JSON.stringify(newTodoItems));
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, INITIAL_STATE);
  const [filter, setFilter] = useState("All Tasks");

  const addNewItem = (todoItemName, todoDueDate, priority, category) => {
    dispatchTodoItems({
      type: "NEW_ITEM",
      payload: { todoItemName, todoDueDate, priority, category },
    });
  };

  const deleteItem = (id) => {
    dispatchTodoItems({ type: "DELETE_ITEM", payload: { id } });
  };

  const toggleItem = (id) => {
    dispatchTodoItems({ type: "TOGGLE_ITEM", payload: { id } });
  };

  return (
    <TodoContextItems.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
        toggleItem,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContextItems.Provider>
  );
};

export default TodoItemsContextProvider;
