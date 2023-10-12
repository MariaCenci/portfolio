import "./index.css";

const Home: React.FC = () => {
  return (
    <>
      <section id="home" className="hero">
        <div className="container-hero">
          <div className="content-hero">
            <div className="hero-img">
              <img src="src/images/myPhoto.png" alt="" />
            </div>

            <div className="hero-text">
              <h1>Front-End Developer<img className="hand-icon" src="src/icons/waving-hand.png" alt="" /></h1>
              
              <p>Hi, I'm Maria Fernanda Cenci, a Front-End Web Developer based in Bergamo, Italy.</p>
              
<span className="social-icons">
<a href="https://github.com/MariaCenci">
  <img src="src/icons/github-icon.svg" alt="" />
</a>
<a href="https://www.linkedin.com/in/maria-fernanda-cenci-23a909276/">
  <img src="src/icons/linkedin-icon.svg" alt="" />
</a>
</span>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
