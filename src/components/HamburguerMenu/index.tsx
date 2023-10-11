import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'

const HamburguerMenu = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <>
      <div
        onClick={toggleMenu}
        className={activeMenu ? "toggleActive" : "toggle"}   >
   
        <div className=" hamburguer-icon"></div>
      </div>

      <div className={activeMenu ? "menuOpen" : "menuClose"}>
       
        {
            activeMenu &&(
         <div className="menu-list">
          <ul className="list-pages">
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
      ) 
       
      }
    
     </div>
    </>
  );
};
export default HamburguerMenu;
