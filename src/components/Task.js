import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  const { text, day, id } = task;

  const style = {
    userSelect: "none",
  };
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(id)}
    >
      <h3 style={style}>
        {text} <FaTimes onClick={() => onDelete(id)} style={{ color: "red" }} />{" "}
      </h3>
      <p style={style}>{day}</p>
    </div>
  );
};

export default Task;
