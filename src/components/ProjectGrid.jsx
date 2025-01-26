import { Link } from 'react-router-dom'
import { projectsData } from '../data/projects'
import './ProjectGrid.css'

function ProjectGrid() {
  return (
    <div className="project-grid">
      {projectsData.map(project => (
        <Link to={`/project/${project.id}`} key={project.id} className="project-card">
          <img src={project.image} alt={project.title} />
          <div className="project-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProjectGrid 