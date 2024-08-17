import "./home.scss";

const Home: React.FC = () => {
  return (
    <>
      <section id="home" className="hero">
        <div className="container-hero">
          <div className="content-hero">
            <div className="main-hero">
              <div className="hero-text">
                <h1>Junior Web Developer👩‍💻</h1>

                <p>
                  Hello, I'm Maria Fernanda, Junior Web Developer!
                </p>

                <span className="social-icons">
                  <a href="https://github.com/MariaCenci" target="_blank">
                    <img src="/icons/github.svg" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/in/maria-fernanda-potricos-cenci-23a909276/" target="_blank">
                    <img src="/icons/linkedin-icon.svg" alt="" />
                  </a>
                </span>
              </div>

              <div className="hero-img">
                <img src="/images/myPhoto.jpg" alt="" />
              </div>
            </div>
            <div className="tech-stack">

              <div className="text-stack">
                <p>Tech Stack</p>
              <div className="underline"></div>
              </div>
              

              <div className="icons-stack">
                <span>
                  <img src="/images/html.png" alt="" />
                </span>
                <span>
                  <img src="/images/css.png" alt="" />
                </span>
                <span>
                  <img src="/images/sass.png" alt="" />
                </span>
               
                <span>
                  <img src="/images/js.png" alt="" />
                </span>
                <span>
                  <img src="/images/ts.svg.png" alt="" />
                </span> 
                <span>
                  <img src="/images/react.png" alt="" />
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
