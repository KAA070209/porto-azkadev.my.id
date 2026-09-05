import { useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import './Projects.css';

const featuredProjects = [
  projectsData.find((p) => p.id === 'e-commerce-bumikriya'),
  projectsData.find((p) => p.id === 'lapor-ob'),
  projectsData.find((p) => p.id === 'website-album-pmr'),
  projectsData.find((p) => p.id === 'website-apotek'),
].filter(Boolean);

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="featured-projects" id="projects">
      <div className="container">
        <div className="featured-projects-header">
          <div>
            <span className="featured-projects-label">My Work</span>
            <h2 className="featured-projects-title">Featured Projects</h2>
          </div>
          <a href="/projects" className="featured-projects-link" onClick={(e) => { e.preventDefault(); navigate('/projects'); }}>
            View all projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <div
              className="featured-project-card"
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="featured-project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="featured-project-info">
                <h3 className="featured-project-title">{project.title}</h3>
                <p className="featured-project-category">Web Application</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
