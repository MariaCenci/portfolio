import "./home.scss";

const Home: React.FC = () => {
  return (
    <>
      <section id="home" className="hero">
        <div className="container-hero">
          <div className="content-hero">
            <div className="main-hero">
              <div className="hero-text">
                <h1>Front-End Developer👩‍💻</h1>

                <p>
                  Hi, I'm Maria Fernanda Cenci, a Front-End Web Developer based
                  in Bergamo, Italy.
                </p>

                <span className="social-icons">
                  <a href="https://github.com/MariaCenci">
                    <img src="src/icons/github.svg" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/in/maria-fernanda-cenci-23a909276/">
                    <img src="src/icons/linkedin-icon.svg" alt="" />
                  </a>
                </span>
              </div>

              <div className="hero-img">
                <img src="src/images/myPhoto.jpg" alt="" />
              </div>
            </div>
            <div className="tech-stack">

              <div className="text-stack">
                <p>Tech Stack</p>
              <div className="underline"></div>
              </div>
              

              <div className="icons-stack">
                <span>
                  <img src="src/images/html.png" alt="" />
                </span>
                <span>
                  <img src="src/images/css.png" alt="" />
                </span>
                <span>
                  <img src="src/images/sass.png" alt="" />
                </span>
               
                <span>
                  <img src="src/images/js.png" alt="" />
                </span>
                <span>
                  <img src="src/images/ts.svg.png" alt="" />
                </span> 
                <span>
                  <img src="src/images/react.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
