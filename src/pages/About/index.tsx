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
   
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis nisi libero, nesciunt nam corrupti veniam beatae
            distinctio perferendis, voluptate accusamus est, eveniet recusandae?
            Debitis reiciendis natus consectetur, pariatur exercitationem
            perferendis.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
