import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/actions";
import css from "./Task.module.scss";


export const Task = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={() => dispatch(toggleCompleted(task.id))}

      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}
        onClick={() => dispatch(deleteTask(task.id))} 
      >
        <MdClose size={24} />
      </button>
    </div>
  );
};
