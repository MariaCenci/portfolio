import React from "react";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <>
      <section id="footer">
        <div className="container-footer">
          <div className="content-footer">
            <h3>Copyright©2023</h3>

            <span className="social-icons">
              <a href="https://github.com/MariaCenci">
                <img src="src/icons/github-white.svg" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/maria-fernanda-cenci-23a909276/">
                <img src="src/icons/linkedin-white.svg" alt="linkedin" />
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
