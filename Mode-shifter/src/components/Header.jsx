import Button from "./Button";
import "../Styles/Header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <span>About us</span>
        <h1>Welcome to LoginVerse</h1>
        <Button buttonName="dark-mode" />
      </div>
    </>
  );
};

export default Header;
