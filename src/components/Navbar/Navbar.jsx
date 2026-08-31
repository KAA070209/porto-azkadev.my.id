import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/', hash: null },
  { label: 'About', to: '/about', hash: null },
  { label: 'Skills', to: '/about', hash: '#tech-stack' },
  { label: 'Projects', to: '/projects', hash: null },
  { label: 'Experience', to: '/', hash: '#journey' },
  { label: 'Services', to: '/', hash: '#services' },
  { label: 'Contact', to: '/about', hash: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveHash('');
      return;
    }
    const ids = ['#expertise', '#services', '#journey', '#how-i-work'];
    const sections = ids
      .map((id) => document.querySelector(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToHash = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLinkClick = (e, link) => {
    setMenuOpen(false);
    if (link.to === location.pathname) {
      if (link.hash) {
        e.preventDefault();
        scrollToHash(link.hash);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (link.hash) {
      e.preventDefault();
      navigate(link.to);
      setTimeout(() => scrollToHash(link.hash), 350);
    }
  };

  const isActive = (link) => {
    if (link.to === location.pathname && !link.hash) {
      if (link.to === '/' && activeHash) return false;
      return true;
    }
    if (link.to === location.pathname && link.hash) {
      return activeHash === link.hash;
    }
    return false;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          Portofolio
        </Link>

        <div
          className={`navbar-overlay ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={isActive(link) ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, link)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/about"
            className="navbar-cta"
            onClick={(e) => handleLinkClick(e, { to: '/about', hash: '#contact' })}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
