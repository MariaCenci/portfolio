import React from "react";
import "./projectCard.scss";

const ProjectCard: React.FC = () => {
  return (
    <>
      <div className="project-card">
        <div className="project">
          <img src="/images/moviesLib.png" alt="" />
        </div>

        <div className="project-description">
          <h3 className="title-project">Movies Library</h3>
          <p className="project-text">
            Uma interface responsiva que usa a API The Movies Database para obter diversos gêneros e tipos de filmes, incluindo também uma ferramenta de pesquisa. 
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
                  href="https://movies-library-kappa.vercel.app/"
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

      <div className="project-card">
        <div className="project">
          <img src="/images/buscador-cep.png" alt="" />
        </div>

        <div className="project-description">
          <h3 className="title-project">Buscador de CEP</h3>
          <p className="project-text">
            Utiliza a API ViaCep para buscar CEPs do Brasil todo.
          </p>

          <div className="see-project">
            <div className="link-project">
              <span>
                <a
                  href="https://github.com/MariaCenci/buscador-cep"
                  target="_blank"
                >
                  Code
                </a>
                <img src="/icons/github2.svg" alt="" className="github" />
              </span>
            </div>
            <div className="link-project">
              <span>
                <a href="" target="_blank">
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
