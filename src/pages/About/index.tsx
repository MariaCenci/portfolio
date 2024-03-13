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
            <h3>Sobre mim</h3>
            <h2>Programadora Web Junior em Laguna, Santa Catarina🌐</h2>
            <p>
              Como desenvolvedora web júnior, estou dedicada a criar aplicações
              web que combinam funcionalidade com design bonito. Minhas
              principais ferramentas são TypeScript, React e Sass, e estou
              constantemente aprimorando minhas habilidades. Prezo por construir
              e manter sites responsivos para uma experiência de usuário
              interativa e fluida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
