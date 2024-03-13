import { useState } from "react";

import {Link} from "react-scroll";
import "./hamburguer.scss";

const HamburguerMenu: React.FC = () => {
const body  = document.querySelector('body') as HTMLElement
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

  // disactivate scroll bar opened menu 
  if(activeMenu){
    body.style.overflow = 'hidden'
  } else{
    body.style.overflow = 'auto'
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
                <Link to="home"  smooth={true} duration={500}  onClick={closeMenu} >Home</Link>
              </li>
              <li>
                <Link to="about"  smooth={true} duration={500}  onClick={closeMenu}>Sobre</Link >
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projetos</Link>
              </li>
              <li>
                <Link to="contact"  smooth={true} duration={500}  onClick={closeMenu} >Contato</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default HamburguerMenu;
