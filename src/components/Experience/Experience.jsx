import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Experience.css';

const tabs = [
  { id: 'work', label: 'Work Experience' },
  { id: 'education', label: 'Education' },
];

const experienceData = {
  work: [
        {
      period: 'Oktober 2026 - Present',
      title: 'Frontend Developer - Internship',
      place: 'Auspify Technologies',
      logo: '/work/aus-company-logo.png',
      images: ['/work/company-aus.jpg', '/work/company-aus.jpeg'],
      description:
        'Developing modern, responsive, and user-friendly web interfaces using React.js. Implementing reusable UI components, integrating REST APIs, and ensuring consistent user experiences across different screen sizes. Collaborating on frontend development tasks, testing application functionality, and fixing bugs to improve performance, usability, and code quality.',
      tags: [
  'React.js',
  'JavaScript',
  'REST API',
  'Responsive Design',
  'HTML',
  'CSS',
]
    },
    {
      period: 'Juli 2026 - Oktober 2026',
      title: 'Frontend Developer - Internship',
      place: 'PT WALDEN GLOBAL SERVICES',
      logo: '/work/wgs-company-logo.png',
      images: ['/work/company-wgs.jpg', '/work/company-wgs2.jpeg'],
      description:
        'Developed Lapor OB, a digital reporting platform for managing Office Boy tasks and monitoring operational reports. Built responsive web interfaces using React.js and mobile interfaces using Flutter and Dart. Integrated frontend components with REST APIs, maintained UI/UX consistency across platforms, and performed feature testing and bug fixes to improve application functionality and usability.',
      tags: [
        'React.js',
        'Flutter',
        'Dart',
        'REST API',
      ]
    },
  ],
  
education: [
  {
    period: '2024 - 2027',
    title: 'Software Engineering (Rekayasa Perangkat Lunak)',
    place: 'SMKN 2 Cimahi',
    logo: '/work/smkn2-cimahi-logo.png',
    images: ['/work/smk2cimahi.jpeg', '/work/smkn2-cimahi-2.jpg'],
    description:
      'Studying software engineering with a focus on web and mobile application development, database management, and software development fundamentals. Gaining hands-on experience through academic projects involving frontend and backend development, API integration, and database design.',
    tags: [
      'Programming Dasar',
      'Web Development',
      'Python',
      'PHP',
      'Laravel',
      'MySQL',
      'Flask',
    ],
  },
],

};

function ExperienceIcon({ logo, label }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="experience-item-icon">
      {logo && !imgFailed ? (
        <img
          src={logo}
          alt={label || ''}
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      ) : (
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
      )}
    </div>
  );
}

function ExperiencePhotos({ images, onSelect }) {
  const [failed, setFailed] = useState({});

  if (!images || images.length === 0) return null;

  const list = images.filter((src) => !failed[src]);
  if (list.length === 0) return null;

  return (
    <div className="experience-item-photos">
      {list.map((src) => (
        <button
          type="button"
          className="experience-item-photo"
          key={src}
          onClick={() => onSelect(src)}
          aria-label="Lihat foto lebih besar"
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            onError={() => setFailed((prev) => ({ ...prev, [src]: true }))}
          />
        </button>
      ))}
    </div>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work');
  const [activePhoto, setActivePhoto] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (src) => {
    setActivePhoto(src);
    requestAnimationFrame(() => setLightboxOpen(true));
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setActivePhoto(null), 280);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      document
        .querySelectorAll(
          '#experience .experience-item, #experience .experience-tabs'
        )
        .forEach((el) => el.classList.add('visible'));
    }, 80);
    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (activePhoto) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [activePhoto]);

  return (
    <section className="experience animate-on-scroll" id="experience">
      <div className="container">
        <div className="experience-header animate-on-scroll">
          <h2 className="section-title">
            My <span>Experience</span>
          </h2>

          <div className="section-divider"></div>

          <p className="experience-intro">
            A timeline of my work experience and education.
          </p>
        </div>

        <div className="experience-tabs animate-on-scroll" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`experience-tab ${
                activeTab === tab.id ? 'active' : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="experience-list">
          {experienceData[activeTab].map((item, index) => (
            <div
              className="experience-item animate-on-scroll"
              key={item.period + item.title}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <ExperienceIcon logo={item.logo} label={item.place} />

                <div className="experience-item-content">
                <span className="experience-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="experience-place">{item.place}</p>
                <p>{item.description}</p>

                {item.tags.length > 0 && (
                  <div className="experience-tags">
                    {item.tags.map((tag) => (
                      <span className="experience-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {item.images && item.images.length > 0 && (
                  <ExperiencePhotos
                    images={item.images}
                    onSelect={openLightbox}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activePhoto &&
        createPortal(
          <div
            className={`experience-lightbox ${lightboxOpen ? 'is-open' : ''}`}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="experience-lightbox-close"
              aria-label="Tutup"
              onClick={closeLightbox}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <img
              className="experience-lightbox-img"
              src={activePhoto}
              alt=""
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </section>
  );
}