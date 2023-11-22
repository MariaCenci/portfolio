import React from "react";
import "./projectCard.scss";

const ProjectCard: React.FC = () => {
  return (
    <div className="project-card">
      <div className="project">
        <img src="/images/moviesLib.png" alt="" />
      </div>

      <div className="project-description">
        <h3 className="title-project">Movies Library</h3>
        <p className="project-text">
        A responsive client interface for a movie app that uses The Movies Database API to fetch top-rated, popular, and upcoming movies. There's the possibility to explore a variety of cinematic options using the search feature to discover movies by title.
        </p>

        <div className="see-project">
          <div className="link-project">
            <span>
              <a href="https://github.com/MariaCenci/MoviesLibrary">Code</a>
              <img src="/icons/github2.svg" alt="" className="github" />
            </span>
          </div>

          <div className="link-project">
            <span>
              <a href="https://movies-library-i0yrh7lzr-maria-cencis-projects.vercel.app">Demo</a>
              <img src="/icons/eye.svg" alt="" className="demo" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
