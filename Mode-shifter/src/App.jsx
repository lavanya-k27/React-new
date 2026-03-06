import { useState } from "react";
import InputForm from "./components/InputForm";
import Button from "./components/Button";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeChange = () => {
    return setDarkMode(!darkMode);
  };
  return (
    <>
      <Header darkMode={darkMode} handleModeChange={handleModeChange} />
      <div className={darkMode ? "container dark" : "container"}>
        <InputForm darkMode={darkMode} />
        <div className="button-container">
          <Button buttonName="Login" darkMode={darkMode} />
          <Button buttonName="SignUp" darkMode={darkMode} />
        </div>
      </div>
    </>
  );
}

export default App;
