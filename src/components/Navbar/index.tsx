import { Link } from "react-scroll";
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
              {screenWidth <= 899 && <HamburguerMenu />}
           
            <ul className="nav-links-list">
            <li>
                <Link to="home"  smooth={true} duration={500} >Home</Link>
              </li>
              <li>
                <Link to="about"  smooth={true} duration={500} >About</Link >
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} >Projects</Link>
              </li>
              <li>
                <Link to="contact"  smooth={true} duration={500} >Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
