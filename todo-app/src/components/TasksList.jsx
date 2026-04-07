import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import axios from "axios";
import "../styles/TasksList.css";

const TasksList = ({ tasks, setTasks }) => {
  const [done, setDone] = useState(false);
  const [doneTasks, setDoneTasks] = useState([]);

  const handleDone = (id) => {
    setDoneTasks((prevDoneTasks) => {
      if (prevDoneTasks.includes(id)) {
        return prevDoneTasks.filter((taskId) => taskId !== id);
      } else {
        return [...prevDoneTasks, id];
      }
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  return (
    <div className="tasks-container">
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            className={`tasks ${
              doneTasks.includes(task.id) ? "task-completed" : ""
            }`}
          >
            <span className="task">{task.text} </span>
            <MdModeEdit className="task-edit" />
            <FaClipboardCheck
              className="task-done"
              onClick={() => handleDone(task.id)}
            />
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
