import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProjectById, projectsData } from '../data/projectsData';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);
  const [previewImage, setPreviewImage] = useState(null);

  const handleDiscussClick = () => {
    navigate('/about');
    setTimeout(() => {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setPreviewImage(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="project-detail-page">
      <div className="container">
        {/* Back Button */}
        <div className="project-detail-nav animate-on-scroll visible">
          <Link to="/projects" className="back-link">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Hero Header Section */}
        <div className="project-detail-hero animate-on-scroll visible">
          <span className="project-number-tag">{project.projectNumber || 'PROJECT_01'}</span>
          <h1 className="project-detail-main-title">{project.title}</h1>
          <p className="project-detail-subtitle">
            {project.subtitle || project.description}
          </p>

          <div className="project-meta-row">
            {project.role && (
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">{project.role}</span>
              </div>
            )}
            {project.year && (
              <div className="meta-item">
                <span className="meta-label">Year</span>
                <span className="meta-value">{project.year}</span>
              </div>
            )}
            {project.client && (
              <div className="meta-item">
                <span className="meta-label">Client</span>
                <span className="meta-value">{project.client}</span>
              </div>
            )}
            {project.category && (
              <div className="meta-item">
                <span className="meta-label">Category</span>
                <span className="meta-value">{project.category}</span>
              </div>
            )}
          </div>

          <div className="project-detail-actions">
            <a
              href={project.demoUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-demo"
              onClick={(e) => {
                if (project.demoUrl === '#') e.preventDefault();
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              DEMO
            </a>

            <a
              href={project.sourceUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-source"
              onClick={(e) => {
                if (project.sourceUrl === '#') e.preventDefault();
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              SOURCE CODE
            </a>
          </div>

          {/* Featured Showcase Showcase Container */}
          <div className="project-showcase-container">
            <div className="showcase-glow"></div>
            <div className="showcase-card">
              <img src={project.image} alt={project.title} className="showcase-img" />
            </div>
          </div>
        </div>

        {/* Main Content Layout Grid */}
        <div className="project-detail-grid">
          {/* Left Column */}
          <div className="project-detail-main animate-on-scroll visible">
            {/* Overview */}
            {project.description && (
              <section className="detail-section">
                <h2 className="section-heading">
                  <span className="heading-icon accent-blue">📋</span> Overview
                </h2>
                <div className="detail-card">
                  <p>{project.description}</p>
                </div>
              </section>
            )}

            {/* Gallery / Screenshots */}
            {project.gallery && project.gallery.length > 0 && (
              <section className="detail-section">
                <h2 className="section-heading">
                  <span className="heading-icon accent-cyan">🖼️</span> Gallery
                </h2>
                <div className="project-gallery-grid">
                  {project.gallery.map((img, i) => (
                    <button
                      type="button"
                      key={i}
                      className="gallery-thumb"
                      onClick={() => setPreviewImage(img)}
                      aria-label={`Preview image ${i + 1}`}
                    >
                      <img src={img} alt={`${project.title} screenshot ${i + 1}`} />
                      <span className="gallery-zoom">
                        <svg
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* The Challenge */}
            {project.challenge && (
              <section className="detail-section">
                <h2 className="section-heading">
                  <span className="heading-icon accent-blue">▲</span> The Challenge
                </h2>
                <div className="detail-card">
                  {project.challenge.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {/* The Solution */}
            {project.solution && (
              <section className="detail-section">
                <h2 className="section-heading">
                  <span className="heading-icon accent-purple">📍</span> The Solution
                </h2>
                <div className="detail-card">
                  <p>{project.solution}</p>

                  {project.coreFeatures && project.coreFeatures.length > 0 && (
                    <div className="core-features-block">
                      <h3 className="core-features-title">Core Features</h3>
                      <div className="features-list">
                        {project.coreFeatures.map((feature, i) => (
                          <div key={i} className="feature-item">
                            <div className="feature-check-icon">
                              <svg
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <div className="feature-info">
                              <h4 className="feature-name">{feature.title}</h4>
                              <p className="feature-desc">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Results & Impact */}
            {project.results && project.results.length > 0 && (
              <section className="detail-section">
                <h2 className="section-heading">
                  <span className="heading-icon accent-cyan">📈</span> Results & Impact
                </h2>
                <div className="results-grid">
                  {project.results.map((res, i) => (
                    <div key={i} className="result-card">
                      <div className="result-value">{res.value}</div>
                      <div className="result-label">{res.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="project-detail-sidebar animate-on-scroll visible">
            {/* Tech Stack Card */}
            {project.tags && (
              <div className="sidebar-card tech-stack-card">
                <h3 className="sidebar-title">Tech Stack</h3>
                <div className="tech-tags-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Code Snippet Window */}
            {project.codeSnippet && (
              <div className="sidebar-card code-window-card">
                <div className="code-window-header">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <span className="code-filename">{project.codeSnippet.filename}</span>
                </div>
                <div className="code-window-body">
                  <pre className="code-block">
                    <code>{project.codeSnippet.code}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Call to Action Card */}
            <div className="sidebar-card cta-card">
              <h3 className="cta-title">Need similar scalability?</h3>
              <button
                type="button"
                className="btn-cta-discuss"
                onClick={handleDiscussClick}
              >
                DISCUSS YOUR PROJECT
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Photo Preview / Lightbox */}
      {previewImage && (
        <div className="photo-lightbox" onClick={() => setPreviewImage(null)}>
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close preview"
            onClick={() => setPreviewImage(null)}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            src={previewImage}
            alt="Preview"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
