import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoContextItems } from "../store/todo-items-store";
function TodoItem({ name, dueDate }) {
  const { deleteItem } = useContext(TodoContextItems);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{name}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItem(name)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
