import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CVPreviewModal from './CVPreviewModal';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/', hash: null },
  { label: 'About', to: '/about', hash: null },
  { label: 'Skills', to: '/skills', hash: null },
  { label: 'Projects', to: '/projects', hash: null },
  { label: 'Experience', to: '/', hash: '#journey' },
  { label: 'Contact', to: '/contact', hash: null },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCvClick = useCallback((e) => {
    e.preventDefault();
    setCvModalOpen(true);
  }, []);

  const handleCloseCvModal = useCallback(() => {
    setCvModalOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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
          <span>Portofolio </span>
        </Link>

        <div
          className={`navbar-overlay ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setMenuOpen(!menuOpen);
            }
          }}
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
          <a
            href="/cv.pdf"
            className="navbar-cv-btn navbar-cv-btn-mobile"
            onClick={handleCvClick}
          >
            Download CV
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>

        <a
          href="/cv.pdf"
          className="navbar-cv-btn"
          onClick={handleCvClick}
        >
          Download CV
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </div>
      <CVPreviewModal isOpen={cvModalOpen} onClose={handleCloseCvModal} />
    </nav>
  );
}
