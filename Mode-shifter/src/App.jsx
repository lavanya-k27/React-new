import InputForm from "./components/InputForm";
import Button from "./components/Button";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <InputForm />
      <Button buttonName="Login" />
      <Button buttonName="SignUp" />
    </>
  );
}

export default App;
