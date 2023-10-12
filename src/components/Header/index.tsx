import Navbar from "../Navbar";
import './index.css'

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <span>MariaCenci</span>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
