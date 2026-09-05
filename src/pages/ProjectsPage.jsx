import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import './AllProjects.css';

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <section className="all-projects">
      <div className="container">
        <div className="all-projects-header">
          <span className="all-projects-label">My Work</span>
          <h1 className="all-projects-title">All Projects</h1>
          <p className="all-projects-subtitle">
            A collection of projects I have worked on across web, mobile, and full stack development.
          </p>
        </div>

        <div className="all-projects-grid">
          {projectsData.map((project) => (
            <div
              className="all-project-card"
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="all-project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="all-project-info">
                <h3 className="all-project-title">{project.title}</h3>
                <p className="all-project-category">{project.subtitle}</p>
                <div className="all-project-tags">
                  {project.tags.map((tag) => (
                    <span className="all-project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
