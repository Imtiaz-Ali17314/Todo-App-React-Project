import { useContext, useRef } from "react";
import styles from "./TodoInput.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { TodoContextItems } from "../store/todo-items-store";

function TodoInput() {
  const { addNewItem } = useContext(TodoContextItems);

  let itemName = useRef();
  let dueDate = useRef();

  const handleOnClickEvent = (event) => {
    event.preventDefault();
    let todoItemName = itemName.current.value;
    let todoDueDate = dueDate.current.value;
    itemName.current.value = "";
    dueDate.current.value = "";
    addNewItem(todoItemName, todoDueDate);
  };
  return (
    <div className="container" onSubmit={handleOnClickEvent}>
      <form className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            className={`form-control ${styles.input}`}
            ref={itemName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={`form-control ${styles.input}`}
            ref={dueDate}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
