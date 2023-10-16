import ProjectCard from "../../components/ProjectCard"
import "./projects.scss"

const Projects: React.FC = () => {

  return (
    <>
    <section id="projects">
    <div className="container-projects">
     <div className="content-projects">
<h3>Portfolio</h3>

<ProjectCard />



     </div>
    </div>
    </section>
    </> 
  )
 
}

export default Projects
