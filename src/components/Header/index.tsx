import Navbar from "../Navbar";
import "./header.scss";

const Header = () => {
  return (
    <>
    <section id="header">
      <div className="header-container">
        <div className="logo">
          <span>{'{ MariaCenci }'}</span>
        </div>
        <Navbar />
      </div>
    </section>
    </>
  );
};

export default Header;
