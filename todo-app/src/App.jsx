import { useState, useEffect } from "react";
import axios from "axios";
import TaskInputBar from "./components/TaskInputBar";
import TasksList from "./components/TasksList";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:3001/tasks");
      setTasks(response.data);
      console.log(response);
    };

    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTasks = async () => {
    const newTask = {
      text: text,
    };

    const response = await axios.post("http://localhost:3001/tasks", newTask);
    setTasks((prev) => [...prev, response.data]);
    setText("");
  };

  return (
    <div className="app-container">
      <h1>YOUR TODO LISTS</h1>
      <TaskInputBar
        handleChange={handleChange}
        addTasks={addTasks}
        text={text}
      />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
