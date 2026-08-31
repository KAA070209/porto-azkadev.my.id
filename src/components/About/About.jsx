import './About.css';

const tags = [
  'Frontend Development',
  'Backend Development',
  'Mobile Development',
  'Full Stack Development',
  'Optimization SEO',
  'UI/UX Design',
];

export default function About() {
  return (
    <section className="about animate-on-scroll" id="about">
      <div className="container">
        {/* Hero Header */}
        <div className="about-hero animate-on-scroll">
          <h2 className="about-hero-title">
            <span className="line-white">Developer.</span>
            <span className="line-gradient">Problem Solver.</span>
          </h2>
          <div className="about-hero-divider"></div>
        </div>

        {/* Philosophy + Profile Card */}
        <div className="philosophy-layout animate-on-scroll">
          <div className="philosophy-text">
            <h2>About Me</h2>

            <p>
              I am a software developer with a strong interest in building modern,
              responsive, and functional digital applications. I enjoy transforming
              ideas into web and mobile applications that provide useful and
              seamless experiences for users.
            </p>

            <p>
              My experience includes frontend development with HTML, CSS,
              JavaScript, TypeScript, React.js, and Next.js, as well as backend
              development using Node.js, Python, FastAPI, and PostgreSQL. I also
              develop cross-platform mobile applications using Flutter and work
              with development tools such as Git and Docker to support efficient
              software development workflows.
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
              <img src="/profile.png" alt="Muhammad Azka Sa'adi Nabhan" />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
