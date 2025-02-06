import { Link } from "react-router-dom";
import "../styles/style.css";

function Header({ setDarkMode, darkMode }) {
  return (
    <header className="header">
      <h3>Recipe App</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <button onClick={() => setDarkMode(!darkMode)} style={{marginLeft:"20px"}}>
          {darkMode ? (
            <i className="fas fa-sun"></i>  // Sun icon for Light Mode
          ) : (
            <i className="fas fa-moon"></i>  // Moon icon for Dark Mode
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
