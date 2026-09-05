import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimationObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is rendered
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimationObserver />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
