import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HamburguerMenu from "../HamburguerMenu";
import "./index.css";

const Navbar: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="logo">
            <span>MariaCenci</span>
          </div>
          
        <div className="navbar-links ">
              {screenWidth <= 768 && <HamburguerMenu />}
           
            <ul className="nav-links-list">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
