import { MdDelete } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import axios from "axios";
import "../styles/TasksList.css";

const TasksList = ({ tasks, setTasks }) => {
  //const handleDone = () => {};

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  return (
    <div className="tasks-container">
      {tasks.map((task) => {
        return (
          <div key={task.id} className="tasks">
            <span className="task">{task.text} </span>
            <MdModeEdit className="task-edit" />
            <FaClipboardCheck className="task-done" />
            <MdDelete
              className="task-delete"
              onClick={() => handleDelete(task.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
