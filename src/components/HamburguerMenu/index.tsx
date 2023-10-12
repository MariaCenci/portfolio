import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const HamburguerMenu: React.FC = () => {
    //setMenu to true or false according to opened or closed
  const [activeMenu, setActiveMenu] = useState(false);

  //open and close menu
  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  //closes menu when a link is clicked
  const closeMenu = () => {
setActiveMenu(false)
  }

  return (
    <>
      <div
        onClick={toggleMenu}
        className={activeMenu ? "toggleActive" : "toggle"}
      >
        <div className=" hamburguer-icon"></div>
      </div>

      <div className={activeMenu ? "menuOpen" : "menuClose"}>
        {activeMenu && (
          <div className="menu-list">
            <ul className="list-pages">
              <li>
                <Link to="/" onClick={closeMenu}>About</Link >
              </li>
              <li>
                <Link to="/projects" onClick={closeMenu}>Projects</Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu} >Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default HamburguerMenu;
