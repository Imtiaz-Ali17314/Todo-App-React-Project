import { createContext } from "react";
import { useReducer } from "react";

export const TodoContextItems = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.todoItemName,
        dueDate: action.payload.todoDueDate,
      },
    ];
    return newTodoItems;
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name != action.payload.itemName
    );
    return newTodoItems;
  }
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  let addNewItem = (todoItemName, todoDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoItemName,
        todoDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  let deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoContextItems.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoContextItems.Provider>
  );
};

export default TodoItemsContextProvider;
