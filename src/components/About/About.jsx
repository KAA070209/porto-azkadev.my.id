import './About.css';

const tags = [
  'Web Development',
  'Mobile Development',
  'Backend Development',
  'Full Stack Development',
  'API Development',
  'SEO Optimization',
];

export default function About() {
  return (
    <section className="about animate-on-scroll" id="about">
      <div className="container">
        {/* Hero Header */}
        <div className="about-hero animate-on-scroll">
          <h2 className="about-hero-title">
            <span className="line-white">Software Developer.</span>
            <span className="line-gradient">Problem Solver.</span>
          </h2>

          <div className="about-hero-divider"></div>
        </div>

        {/* Philosophy + Profile Card */}
        <div className="philosophy-layout animate-on-scroll">
          <div className="philosophy-text">
            <h2>About Me</h2>

            <p>
              I am a software developer focused on building modern,
              responsive, and scalable digital applications. I enjoy
              turning ideas and real-world problems into reliable
              software solutions with clean and maintainable code.
            </p>

            <p>
              My experience covers web, mobile, and backend development.
              I work with technologies such as React.js, Next.js,
              TypeScript, Node.js, Python, FastAPI, Flutter, and
              PostgreSQL. I also work with REST APIs, Git, Docker,
              and modern development workflows to build and maintain
              efficient applications.
            </p>

            <p>
              Beyond development, I pay attention to performance,
              responsive design, SEO, and user experience to ensure
              that the applications I build are not only functional,
              but also accessible and effective for users.
            </p>

            <div className="philosophy-tags">
              {tags.map((tag) => (
                <span className="philosophy-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-image-wrapper">
              <img
                src="/profile.png"
                alt="Muhammad Azka Sa'adi Nabhan - Software Developer"
              />
            </div>

            <div className="profile-info">
              <div className="profile-status">
                <span className="profile-status-dot"></span>
                status: available
              </div>

              <h3>
                Muhammad Azka
            
                Sa'adi Nabhan
              </h3>

              <span className="profile-role">
                Software Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
