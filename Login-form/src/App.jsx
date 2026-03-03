import Input from "./components/Input";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div>
        <Input />
      </div>
      <div>
        <Button buttonName="Login" />
        <Button buttonName="SingUp" />
      </div>
    </div>
  );
}

export default App;
