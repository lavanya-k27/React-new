import "../Styles/Header.css";

const Header = ({ handleModeChange, darkMode }) => {
  return (
    <>
      <div className={darkMode ? "header-container dark" : "header-container"}>
        <span>About us</span>
        <h1>Welcome to LoginVerse</h1>
        <button
          className={darkMode ? "header-button dark" : "header-button"}
          onClick={handleModeChange}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
};

export default Header;
