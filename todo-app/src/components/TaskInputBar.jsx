import "../styles/TaskInputBar.css";

const TaskInputBar = ({ handleChange, addTasks, text }) => {
  return (
    <div className="input-container">
      <input onChange={handleChange} value={text} className="input-bar" />
      <button onClick={addTasks} className="add-button">
        Add
      </button>
    </div>
  );
};

export default TaskInputBar;
