import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projects'
import './ProjectDetail.css'

function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === parseInt(id))

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="project-detail">
      <Link to="/" className="back-button">← Back to Projects</Link>
      
      <h1>{project.title}</h1>
      
      <div className="project-media">
        <img src={project.image} alt={project.title} className="main-image" />
        
        {project.gallery && (
          <div className="image-gallery">
            {project.gallery.map((image, index) => (
              <img key={index} src={image} alt={`${project.title} gallery ${index + 1}`} />
            ))}
          </div>
        )}
        
        {project.video && (
          <div className="video-container">
            <iframe
              src={project.video}
              title={`${project.title} video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      <div className="project-info">
        <div className="tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <section className="description">
          <h2>About this Project</h2>
          <p>{project.description}</p>
          {project.longDescription && project.longDescription.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        {project.features && (
          <section className="features">
            <h2>Key Features</h2>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {project.technicalDetails && (
          <section className="technical-details">
            <h2>Technical Details</h2>
            <ul>
              {project.technicalDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail 