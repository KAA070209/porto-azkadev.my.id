import './TechStack.css';

const techData = [
  {
    name: 'HTML / CSS',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    name: 'JavaScript / TypeScript',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    name: 'React.js / Next.js',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="2"></circle>
        <ellipse cx="12" cy="12" rx="10" ry="4"></ellipse>
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          transform="rotate(60 12 12)"
        ></ellipse>
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          transform="rotate(120 12 12)"
        ></ellipse>
      </svg>
    ),
  },
  {
    name: 'Node.js / Express',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="18" rx="2"></rect>
        <path d="M8 8l-3 4 3 4"></path>
        <path d="M16 8l3 4-3 4"></path>
      </svg>
    ),
  },
  {
    name: 'Python / FastAPI',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a5 5 0 0 0-5 5v3h10V7a5 5 0 0 0-5-5z"></path>
        <path d="M12 22a5 5 0 0 0 5-5v-3H7v3a5 5 0 0 0 5 5z"></path>
        <circle cx="9" cy="7" r="1"></circle>
        <circle cx="15" cy="17" r="1"></circle>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
      </svg>
    ),
  },
  {
    name: 'Flutter',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12L12 4h5l-8 8 4 4-3 3z"></path>
        <path d="M12 20l-3-3 4-4 7 7z"></path>
      </svg>
    ),
  },
  {
    name: 'REST API',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="6" r="2"></circle>
        <circle cx="18" cy="12" r="2"></circle>
        <circle cx="6" cy="18" r="2"></circle>
        <line x1="8" y1="7" x2="16" y2="11"></line>
        <line x1="8" y1="17" x2="16" y2="13"></line>
      </svg>
    ),
  },

{
  name: 'Swagger / API Documentation',
  icon: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16v16H4z"></path>
      <path d="M8 8h8"></path>
      <path d="M8 12h8"></path>
      <path d="M8 16h5"></path>
    </svg>
  ),
},
{
  name: 'ngrok',
  icon: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M3 12h18"></path>
      <path d="M12 3a14 14 0 0 1 0 18"></path>
      <path d="M12 3a14 14 0 0 0 0 18"></path>
    </svg>
  ),
},

  {
    name: 'Git / GitHub',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="6" r="2"></circle>
        <circle cx="18" cy="6" r="2"></circle>
        <circle cx="12" cy="18" r="2"></circle>
        <line x1="8" y1="7" x2="10.5" y2="16"></line>
        <line x1="16" y1="7" x2="13.5" y2="16"></line>
        <line x1="8" y1="6" x2="16" y2="6"></line>
      </svg>
    ),
  },
  {
    name: 'Docker',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="10" width="4" height="4"></rect>
        <rect x="8" y="10" width="4" height="4"></rect>
        <rect x="13" y="10" width="4" height="4"></rect>
        <rect x="8" y="5" width="4" height="4"></rect>
        <path d="M3 16h14c2.5 0 4-1 4-3"></path>
      </svg>
    ),
  },

{
  name: 'SEO Optimization',
  icon: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="6"></circle>
      <line x1="16" y1="16" x2="21" y2="21"></line>
      <path d="M8 11h6"></path>
      <path d="M11 8v6"></path>
    </svg>
  ),
},

];

export default function TechStack() {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="container">
        <div className="tech-stack-header animate-on-scroll">
          <h2 className="section-title">
            <span className="header-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
              </svg>
            </span>

            <span>Technical Stack</span>
          </h2>

          <div className="section-divider"></div>
        </div>

        <div className="tech-grid">
          {techData.map((tech, index) => (
            <div
              className="tech-card animate-on-scroll"
              key={tech.name}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="tech-card-icon">{tech.icon}</div>
              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
