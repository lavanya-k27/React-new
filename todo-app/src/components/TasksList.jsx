import { MdDelete } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import "../styles/TasksList.css";

const TasksList = ({ tasks }) => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => {
        return (
          <div className="tasks">
            <span className="task">{task} </span>
            <MdModeEdit className="task-edit" />
            <FaClipboardCheck className="task-done" />
            <MdDelete className="task-delete" />
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
