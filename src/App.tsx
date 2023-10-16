

import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import {Element} from "react-scroll"

const App: React.FC = () => {
 

  return (
    <>
<Header/>

<Element name="home">
  <Home />
</Element>

<Element name="about">
  <About />
</Element>

<Element name="projects">
 <Projects /> 
</Element>

<Element name="contact">
  <Contact />
</Element>


<Footer />
     </>
  )
}

export default App
