import { useState } from "react";
import "../Styles/InputForm.css";

const InputForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <input
        placeholder="Email"
        onChange={handleInputChange}
        type="text"
        value={email}
      />
      <input
        placeholder="Password"
        onChange={handlePasswordChange}
        type="password"
        value={password}
      />
    </>
  );
};

export default InputForm;
