import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        {/* Left Content */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Available for Freelance Projects
          </div>

          <h1 className="hero-title">
            Turning your ideas into{' '}
            <span className="hero-highlight">
              digital products.
            </span>
          </h1>

          <p className="hero-description">
            I design and develop modern websites, web applications,
            and mobile apps that are fast, responsive, and built
            around your business goals.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              <span>View My Work</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <Link to="/contact" className="btn-secondary">
              <span>Start a Project</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Center Profile */}
        <div className="hero-center">
          <div className="hero-photo-wrapper">
            <img
              src="/profile.png"
              alt="Muhammad Azka Sa'adi Nabhan, Software Developer"
              className="hero-photo"
            />

            <div className="hero-experience-badge">
              <span className="experience-number">2+</span>

              <span className="experience-text">
                Years
                <br />
                Experience
              </span>

              <div className="experience-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Stats */}
        <div className="hero-right">

          {/* Web & Mobile */}
          <div className="hero-stat-card">
            <div className="stat-icon stat-icon-check">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>

            <span className="stat-number">Web</span>
            <span className="stat-label">Development</span>
          </div>

          {/* Backend */}
          <div className="hero-stat-card">
            <div className="stat-icon stat-icon-users">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v7c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12v7c0 1.66 4.03 3 9 3s9-1.34 9-3v-7" />
              </svg>
            </div>

            <span className="stat-number">API</span>
            <span className="stat-label">Backend Development</span>
          </div>

          {/* Mobile */}
          <div className="hero-stat-card">
            <div className="stat-icon stat-icon-star">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>

            <span className="stat-number">Mobile</span>
            <span className="stat-label">App Development</span>
          </div>

        </div>
      </div>
    </section>
  );
}
