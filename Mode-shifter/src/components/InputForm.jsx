import { useState } from "react";
import "../Styles/InputForm.css";

const InputForm = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className={darkMode ? "input-container dark" : "input-container"}>
      <div>
        <input
          className={darkMode ? "dark" : ""}
          placeholder="Email"
          onChange={handleInputChange}
          type="text"
          value={email}
        />
      </div>
      <div>
        <input
          className={darkMode ? "dark" : ""}
          placeholder="Password"
          onChange={handlePasswordChange}
          type="password"
          value={password}
        />
      </div>
    </div>
  );
};

export default InputForm;
