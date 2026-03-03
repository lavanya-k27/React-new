import { useState } from "react";
import Button from "./Button";
import "./Input.css";

const Input = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  let buttonName = showPassword ? "hide password" : "show password";
  return (
    <>
      <div>
        <input placeholder="Email" onChange={handleEmailChange} value={email} />
      </div>
      <div className="straight">
        <input
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
          type={showPassword ? "text" : "password"}
        />
        <Button buttonName={buttonName} onClick={handleShowPassword} />
      </div>
    </>
  );
};

export default Input;
