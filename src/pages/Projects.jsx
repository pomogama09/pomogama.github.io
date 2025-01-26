function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1",
      image: "/placeholder.jpg"
    },
    // Add more projects here
  ]

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects 