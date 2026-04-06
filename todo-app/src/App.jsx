import { useState } from "react";
import TaskInputBar from "./components/TaskInputBar";
import TasksList from "./components/TasksList";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTasks = () => {
    setTasks((tasks) => [...tasks, text]);
    setText("");
  };

  return (
    <div>
      <TaskInputBar
        handleChange={handleChange}
        addTasks={addTasks}
        text={text}
      />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
