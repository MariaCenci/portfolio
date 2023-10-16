import React from "react";
import "./projectCard.scss";

const ProjectCard: React.FC = () => {
  return (
    <div className="project-card">
      <div className="project">
<img src="src/images/boat.jpg" alt="" />

      </div>

      <div className="project-description">
        <h3 className="title-project">Project 1</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
          commodi quae odio fugit possimus officiis deserunt porro esse fuga.
          Numquam perferendis accusamus id consectetur placeat ab corrupti
          dolore eos voluptas?
        </p>
      </div>

      <div className="see-project">
        
         
         <div className="link-project">
          <span>
            <p>Code</p>
          <img src="src/icons/github2.svg" alt="" className="github" />
          
          </span>
         </div>
        
         <div className="link-project">
          <span>
           <p>Demo</p> 
        <img src="src/icons/eye.svg" alt="" className="demo" />
        
     </span>
</div>  

      </div>
    </div>
  );
};

export default ProjectCard;