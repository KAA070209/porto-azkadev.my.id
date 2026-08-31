import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import './Projects.css';

const otherProjectsList = [
  { id: 'website-apotek', title: 'Website Apotek' },
  { id: 'website-bank-sampah', title: 'Website Bank Sampah' },
  { id: 'website-album-pmr', title: 'Website Album PMR' },
  { id: 'website-top-up', title: 'Website Top Up' },
  { id: 'website-logistik', title: 'Website Logistik' },
  { id: 'website-organization', title: 'Website Organization' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const navigate = useNavigate();

  const featuredProjects = projectsData.filter(
    (p) => p.id === 'lapor-ob' || p.id === 'e-commerce-bumikriya'
  );

  const filteredProjects = featuredProjects.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'mobile') return proj.category === 'mobile';
    if (activeFilter === 'web') return proj.category === 'web';
    return true;
  });

  const handleCardClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="projects-section">
      <div className="container">
        {/* Header */}
        <div className="projects-header animate-on-scroll">
          <h1 className="projects-title">Selected Projects</h1>

          {/* Filter Pills */}
          <div className="projects-filters">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
              type="button"
            >
              All
            </button>
            <button
              className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
              onClick={() => setActiveFilter('mobile')}
              type="button"
            >
              Mobile Apps
            </button>
            <button
              className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
              onClick={() => setActiveFilter('web')}
              type="button"
            >
              Web Apps
            </button>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              className="project-card"
              key={`${activeFilter}-${project.id}`}
              onClick={() => handleCardClick(project.id)}
              style={{ cursor: 'pointer' }}
            >
              <div
                className="project-card-image-wrap"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(project.image);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    setLightboxImage(project.image);
                  }
                }}
                title="Click to expand image preview"
              >
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="project-image-zoom" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </span>
              </div>
              <div className="project-card-content">
                <h2 className="project-card-title">
                  <Link
                    to={`/projects/${project.id}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.title}
                  </Link>
                </h2>
                <p className="project-card-desc">{project.description}</p>

                {project.features && Array.isArray(project.features) && (
                  <div className="project-card-features">
                    <span className="features-label">Features</span>
                    <p className="features-text">
                      {project.features.map((f) => f.title || f).join(', ')}
                    </p>
                  </div>
                )}

                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Section */}
        <div className="other-projects-section animate-on-scroll">
          <h2 className="other-projects-title">Other Projects</h2>
          <div className="other-projects-grid">
            {otherProjectsList.map((item, index) => (
              <Link
                to={`/projects/${item.id}`}
                className="other-project-card animate-on-scroll"
                key={item.title}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <span className="other-project-name">{item.title}</span>
                <span className="other-project-arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImage(null);
            }}
            aria-label="Close"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img
            src={lightboxImage}
            alt="Project preview"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
