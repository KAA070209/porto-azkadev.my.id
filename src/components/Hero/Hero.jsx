import Typewriter from '../Typewriter/Typewriter';
import './Hero.css';

const ROLES = ['Software Developer', 'Frontend Engineer', 'Backend Engineer', 'Full Stack Developer', 'Mobile App Developer', 'Optimization & SEO Specialist', 'UI/UX Designer'];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="/hero-bg.jpg" alt="Futuristic cityscape background" />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Available for freelance work
        </div>

        <p className="hero-greeting">Hi there! 👋</p>

        <h1 className="hero-title">
          <span className="name typing-reveal" style={{ animationDelay: '0.2s' }}>
            I'm Muhammad Azka
          </span>
          <span className="role typing-reveal" style={{ animationDelay: '0.4s' }}>
            <Typewriter words={ROLES} />
          </span>
        </h1>

        <p className="hero-description">
          Crafting elegant, high-performance digital solutions. Passionate about
          building seamless experiences across web and mobile platforms with
          modern technologies and clean code.
        </p>

        <div className="hero-buttons">
          <a href="#expertise" className="btn-primary">
            <span>See My Work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Let's Talk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
