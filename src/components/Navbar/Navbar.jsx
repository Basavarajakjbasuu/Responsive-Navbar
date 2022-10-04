import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-links">
        <div className="app__navbar-links_logo">
          <h1>Bassu</h1>
        </div>

        <div className="app__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#home">What is GPT3</a>
          </p>
          <p>
            <a href="#home">Open AI</a>
          </p>
          <p>
            <a href="#features">features</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="app__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>

      <div className="app__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="app__navbar-menu_container">
            <div className="app__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#home">What is GPT3</a>
              </p>
              <p>
                <a href="#home">Open AI</a>
              </p>
              <p>
                <a href="#features">features</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="app__navbar-menu-sign">
              <p>Sign in</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
