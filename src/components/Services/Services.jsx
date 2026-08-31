import './Services.css';

const servicesData = [
  {
    title: 'Website Development',
    description:
      'Building modern, responsive, and interactive websites using React.js, Next.js, JavaScript, TypeScript, HTML, and CSS.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
  {
    title: 'SEO Optimization',
    description:
      'Optimizing websites for search engines through metadata, Open Graph, sitemap, robots configuration, and technical SEO.',
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
  {
    title: 'Mobile App Development',
    description:
      'Building cross-platform mobile applications using Flutter with a focus on functional and user-friendly experiences.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    title: 'Backend & API Development',
    description:
      'Developing backend services and REST APIs using Node.js,Nest.Js, Python, FastAPI, and modern server-side technologies.',
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
    title: 'Database Integration',
    description:
      'Designing and integrating PostgreSQL databases to support reliable data storage and application functionality.',
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
    title: 'Responsive UI Development',
    description:
      'Creating responsive and modern user interfaces that work smoothly across desktop, tablet, and mobile devices.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    title: 'Development Workflow',
    description:
      'Managing source code, containers, environment configuration, and development workflows using Git and Docker.',
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
];

export default function Services() {
  return (
    <section className="services animate-on-scroll" id="services">
      <div className="container">
        <div className="services-header animate-on-scroll">
          <h2 className="section-title">
            Services / <span>What I Can Do</span>
          </h2>

          <div className="section-divider"></div>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              className="service-card animate-on-scroll"
              key={service.title}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="service-card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
