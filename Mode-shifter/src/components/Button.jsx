import "../Styles/Button.css";

const Button = ({ buttonName, darkMode }) => {
  return (
    <>
      <button className={darkMode ? "dark" : ""}>{buttonName}</button>
    </>
  );
};

export default Button;
