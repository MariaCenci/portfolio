import React from "react";
import "./about.scss";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container-about">
        <div className="content-about">
          <div className="img-about">
            <img src="/images/about2.png" alt="" />
          </div>

          <div className="text-about">
            <h3>About me</h3>
            <h2>Junior Web Developer in Laguna, Santa Catarina🌐</h2>
            <p>
            As a junior web developer, I'm dedicated to creating web applications that combine functionality with beautiful design. My main tools are React.js, Typescript and Sass. In order to reach the excellence, I’m constantly improving my skills and learning as much as possible. I value building and keep responsive websites for an interactive and fluid user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
