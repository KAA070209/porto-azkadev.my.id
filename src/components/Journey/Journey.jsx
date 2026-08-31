import './Journey.css';

const journeyData = [
  {
    title: 'Started Learning Programming',
    detail:
      'Built programming fundamentals with HTML, CSS, JavaScript, and Python.',
  },
  {
    title: 'Developed Web Applications',
    detail:
      'Created responsive and interactive web projects using modern frontend technologies.',
  },
  {
    title: 'Worked with React & Next.js',
    detail:
      'Developed modern web applications using React.js, Next.js, JavaScript, and TypeScript.',
  },
  {
    title: 'Explored Backend Development',
    detail:
      'Built backend services and REST APIs using Node.js, NestJS, Python, FastAPI, and PostgreSQL.',
  },
  {
    title: 'Built Mobile Applications',
    detail:
      'Developed cross-platform mobile applications using Flutter.',
  },
  {
    title: 'Implemented SEO & Analytics',
    detail:
      'Worked on technical SEO, metadata, sitemap, robots configuration, Google Analytics, and Microsoft Clarity.',
  },
  {
    title: 'Improved Development Workflow',
    detail:
      'Used Git, Docker, environment configuration, and CI/CD workflows to support development and deployment.',
  },
];

export default function Journey() {
  return (
    <section className="journey animate-on-scroll" id="journey">
      <div className="container">
        <div className="journey-header animate-on-scroll">
          <h2 className="section-title">
            Journey / <span>Experience</span>
          </h2>

          <div className="section-divider"></div>
        </div>

        <div className="journey-list">
          {journeyData.map((item, index) => (
            <div
              className="journey-item animate-on-scroll"
              key={item.title}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="journey-item-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>

              <div className="journey-item-content">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
