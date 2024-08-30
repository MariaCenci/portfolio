import React from "react";
import "./projectCard.scss";

const ProjectCard: React.FC = () => {
  return (
    <>

<div className="project-card">
        <div className="project">
          <img src="/images/img-sweetDreams.png" alt="" />
        </div>

        <div className="project-description">
          <h3 className="title-project">Bakery Landing Page</h3>
          <p className="project-text">
          SweetDreams is a simple and visually appealing bakery website designed to showcase a variety of delicious bakery items. 
          </p>

          <div className="see-project">
            <div className="link-project">
              <span>
                <a
                  href="https://github.com/MariaCenci/landSweetDreams"
                  target="_blank"
                >
                  Code
                </a>
                <img src="/icons/github2.svg" alt="" className="github" />
              </span>
            </div>
            <div className="link-project">
              <span>
                <a href="https://land-sweet-dreams-l2457a5t8-maria-cencis-projects.vercel.app/" target="_blank">
                  Demo
                </a>
                <img src="/icons/eye.svg" alt="" className="demo" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project">
          <img src="/images/moviesLib.png" alt="" />
        </div>

        <div className="project-description">
          <h3 className="title-project">Movies Library</h3>
          <p className="project-text">
            A responsive interface that uses the API "The Movies Database" to obtain different genres and types of movies. It includes a search tool too. 
          </p>

          <div className="see-project">
            <div className="link-project">
              <span>
                <a
                  href="https://github.com/MariaCenci/MoviesLibrary"
                  target="_blank"
                >
                  Code
                </a>
                <img src="/icons/github2.svg" alt="" className="github" />
              </span>
            </div>

            <div className="link-project">
              <span>
                <a
                  href="https://movies-library-ck28xzh7p-maria-cencis-projects.vercel.app/"
                  target="_blank"
                >
                  Demo
                </a>
                <img src="/icons/eye.svg" alt="" className="demo" />
              </span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ProjectCard;
