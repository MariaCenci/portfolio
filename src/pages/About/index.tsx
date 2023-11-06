import React from "react";
import "./about.scss";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container-about">
        <div className="content-about">
          <div className="img-about">
            <img src="src/images/about2.png" alt="" />
          </div>

          <div className="text-about">
            <h3>About me</h3>
            <h2>Passionate Junior Front-End Developer in Bergamo, Italy🌐</h2>
            <p>
              As a junior web developer, I'm dedicated to crafting web applications
              that blend functionality with beautiful design. My key tools are
              TypeScript, React, and Sass, and I'm constantly enhancing my
              skills in pursuit of excellence. I'm deeply passionate about
              building and maintaining responsive websites for an interactive
              and smooth user experience. I thrive in cross-functional teams, as
              I believe the best results arise from merging diverse skills and
              perspectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
