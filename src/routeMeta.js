import { projectsData, getProjectById } from './data/projectsData.js';

export const SITE_URL = 'https://porto.azkadev.my.id';
export const SITE_NAME = "Muhammad Azka Sa'adi Nabhan";
export const DEFAULT_IMAGE = `${SITE_URL}/profile.png`;
export const DEFAULT_TITLE = 'Muhammad Azka — Software Developer';

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const STATIC_ROUTES = [
  {
    path: '/',
    title: "Muhammad Azka Sa'adi Nabhan — Software Developer Portfolio",
    description:
      "Muhammad Azka Sa'adi Nabhan — software developer specializing in frontend, backend, mobile, and DevOps. Building fast, responsive websites, web apps, and mobile apps.",
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/about',
    title: 'About',
    description:
      "Learn about Muhammad Azka Sa'adi Nabhan — a full-stack software developer with 2+ years of experience building web, mobile, and backend solutions.",
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/projects',
    title: 'Projects',
    description:
      "Explore Muhammad Azka's portfolio of software projects — e-commerce platforms, pharmacy systems, waste bank apps, logistics tracking, mobile dashboards, and digital galleries.",
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/skills',
    title: 'Skills',
    description:
      'Technologies and tools Muhammad Azka uses: React, Next.js, TypeScript, Flutter, Node.js, Python, FastAPI, Laravel, PostgreSQL, MySQL, Docker, and more.',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/contact',
    title: 'Contact',
    description:
      'Get in touch with Muhammad Azka for freelance work, collaborations, or software development projects — web, mobile, backend, and full-stack.',
    changefreq: 'monthly',
    priority: '0.7',
  },
];

export function normalizePath(path = '/') {
  const clean = path.split('?')[0].split('#')[0];
  const withoutTrailingSlash = clean.replace(/\/+$/, '');
  return withoutTrailingSlash === '' ? '/' : withoutTrailingSlash;
}

export function buildTitle(title) {
  if (!title) return DEFAULT_TITLE;
  return title.includes('Muhammad Azka') ? title : `${title} | Muhammad Azka`;
}

export function canonicalUrl(path = '/') {
  const normalized = normalizePath(path);
  return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

function projectMeta(project) {
  return {
    path: `/projects/${project.id}`,
    title: project.title,
    description: project.subtitle || project.description,
    image: `${SITE_URL}${project.image}`,
    type: 'article',
    changefreq: 'yearly',
    priority: '0.6',
    project,
  };
}

export function getRouteMeta(path = '/') {
  const normalized = normalizePath(path);

  const staticRoute = STATIC_ROUTES.find((route) => route.path === normalized);
  if (staticRoute) {
    return {
      ...staticRoute,
      image: DEFAULT_IMAGE,
      type: 'website',
    };
  }

  const projectMatch = normalized.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    const project = getProjectById(projectMatch[1]);
    if (project) return projectMeta(project);
  }

  return null;
}

function personNode() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE_NAME,
    alternateName: ['Muhammad Azka', 'Muhammad Azka Saadi Nabhan', 'Azka Nabhan'],
    jobTitle: 'Software Developer',
    description:
      "Muhammad Azka Sa'adi Nabhan is a software developer specializing in frontend, backend, mobile, and DevOps, building fast and responsive websites, web apps, and mobile apps.",
    url: `${SITE_URL}/`,
    mainEntityOfPage: `${SITE_URL}/`,
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/profile.png`,
    },
    email: 'mailto:m.azkanabhan07@gmail.com',
    telephone: '+62-812-8555-4702',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
    nationality: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    knowsLanguage: ['id', 'en'],
    knowsAbout: [
      'Frontend Development',
      'Backend Development',
      'Mobile Development',
      'DevOps',
      'React',
      'Next.js',
      'TypeScript',
      'Flutter',
      'Node.js',
      'Python',
      'FastAPI',
      'Laravel',
      'PostgreSQL',
    ],
    sameAs: [
      'https://github.com/KAA070209',
      'https://www.linkedin.com/in/muhammad-azka-sa-adi-nabhan-678156385/',
      'https://instagram.com/kaa_nbhn',
    ],
  };
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: 'Software Developer portfolio of Muhammad Azka Sa\'adi Nabhan.',
    inLanguage: 'en',
    publisher: { '@id': PERSON_ID },
  };
}

function buildJsonLd(meta) {
  const pageUrl = canonicalUrl(meta.path);
  const isHome = meta.path === '/';
  const webpageType = isHome ? 'ProfilePage' : 'WebPage';

  const webpage = {
    '@type': webpageType,
    '@id': `${pageUrl}#${isHome ? 'profilepage' : 'webpage'}`,
    url: pageUrl,
    name: buildTitle(meta.title),
    description: meta.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    inLanguage: 'en',
    ...(isHome ? { mainEntity: { '@id': PERSON_ID } } : {}),
  };

  const graph = [personNode(), websiteNode(), webpage];

  if (meta.project) {
    graph.push({
      '@type': 'CreativeWork',
      '@id': `${pageUrl}#creativework`,
      name: meta.project.title,
      url: pageUrl,
      image: meta.image,
      description: meta.description,
      author: { '@id': PERSON_ID },
      ...(meta.project.year ? { datePublished: meta.project.year } : {}),
      ...(meta.project.tags ? { keywords: meta.project.tags.join(', ') } : {}),
      ...(meta.project.role ? { about: meta.project.role } : {}),
    });
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumbs`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projects',
          item: `${SITE_URL}/projects`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: meta.project.title,
          item: pageUrl,
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

const seoCache = new Map();

export function getSeoProps(path = '/') {
  const normalized = normalizePath(path);
  if (seoCache.has(normalized)) return seoCache.get(normalized);

  const meta = getRouteMeta(normalized);
  const props = meta
    ? {
        title: meta.title,
        description: meta.description,
        path: meta.path,
        image: meta.image,
        type: meta.type,
        jsonLd: buildJsonLd(meta),
      }
    : {
        title: 'Page Not Found',
        description: 'The page you are looking for could not be found.',
        path: normalized,
        image: DEFAULT_IMAGE,
        type: 'website',
        jsonLd: null,
      };

  seoCache.set(normalized, props);
  return props;
}

export function getRoutePaths() {
  return [
    ...STATIC_ROUTES.map((route) => route.path),
    ...projectsData.map((project) => `/projects/${project.id}`),
  ];
}

export function getSitemapEntries() {
  return getRoutePaths().map((path) => {
    const meta = getRouteMeta(path);
    return {
      path: meta.path,
      changefreq: meta.changefreq,
      priority: meta.priority,
      image: meta.project ? meta.image : null,
    };
  });
}
