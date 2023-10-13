import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HamburguerMenu from "../HamburguerMenu";
import "./nav.scss";

const Navbar: React.FC = () => {

    //updates screen width for responsivity
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);

    //cleanup
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
         
        <div className="navbar-links ">
           {/*activates hamburguer menu for mobile */}
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
