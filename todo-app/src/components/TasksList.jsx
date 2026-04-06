const TasksList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => {
        return <div>{task}</div>;
      })}
    </div>
  );
};

export default TasksList;
