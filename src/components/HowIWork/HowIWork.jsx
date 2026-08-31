import './HowIWork.css';

const steps = [
  {
    number: 1,
    title: 'Understand Requirements',
    description:
      'Understanding project requirements, identifying user needs, and selecting the appropriate technologies for web, backend, or mobile development.',
  },
  {
    number: 2,
    title: 'Design & Development',
    description:
      'Building responsive interfaces, backend services, REST APIs, and mobile applications using technologies such as React, Next.js, Node.js, NestJS, FastAPI, PostgreSQL, and Flutter.',
  },
  {
    number: 3,
    title: 'Testing & Deployment',
    description:
      'Testing application functionality, managing source code with Git, using Docker when needed, and preparing applications for deployment.',
  },
];

export default function HowIWork() {
  return (
    <section className="how-i-work animate-on-scroll" id="how-i-work">
      <div className="container">
        <div className="how-i-work-header animate-on-scroll">
          <h2 className="section-title">
            How I <span>Work</span>
          </h2>

          <div className="section-divider"></div>
        </div>

        <p className="how-i-work-intro animate-on-scroll">
          My development workflow focuses on understanding requirements, building
          reliable solutions, and continuously improving the application. From
          planning to implementation, I aim to create functional, responsive,
          and maintainable web and mobile applications.
        </p>

        <div className="how-i-work-layout">
          <div className="how-i-work-image animate-on-scroll">
            <img src="/hero-bg.jpg" alt="Software development workspace" />
          </div>

          <div className="how-i-work-steps">
            {steps.map((step, index) => (
              <div
                className="step-item animate-on-scroll"
                key={step.number}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="step-number">{step.number}</div>

                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
