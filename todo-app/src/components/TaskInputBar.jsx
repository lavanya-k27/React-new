const TaskInputBar = ({ handleChange, addTasks, text }) => {
  return (
    <div>
      <input onChange={handleChange} value={text} />
      <button onClick={addTasks}>Add</button>
    </div>
  );
};

export default TaskInputBar;
