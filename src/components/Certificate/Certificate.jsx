import { useState, useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import './Certificate.css';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const certificateData = [
  {
    title: 'Web Development Competition',
    description:
      'Certificate of participation in the Web Development Competition organized by UNIKOM in August 2026. This competition provided an opportunity to demonstrate web development skills and gain experience in a competitive environment.',
    file: '/certificates/502_Webdev_Muhammad_Azka_Saadi_Nabhan.pdf',
  },
  {
    title: 'Web Development Fundamentals',
    description:
      'Completed the Web Development Fundamentals learning program offered by IBM SkillsBuild. This certification supports my foundational knowledge and interest in web development, as part of my continuous learning journey in Software Development.',
    file: '/certificates/IBMDesign20261010-20-3fzxvf.pdf',
  },
  {
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    description:
      'Learn the fundamentals of cloud computing and Generative AI using Amazon Web Services (AWS), including cloud concepts, AWS services, and the implementation of Generative AI technology. Gain an understanding of the basics of using cloud services to support the development of scalable, modern applications.',
    file: '/certificates/sertifikat_course_251_5433098_091026003836.pdf',
  },
];

function CertificatePreview({ src }) {
  const canvasRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    let loadingTask = null;
    let renderTask = null;

    (async () => {
      try {
        loadingTask = pdfjsLib.getDocument({ url: src });
        const doc = await loadingTask.promise;
        if (cancelled) return;

        const page = await doc.getPage(1);
        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const viewport = page.getViewport({ scale: 1.4 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');

        renderTask = page.render({ canvasContext: ctx, viewport });
        await renderTask.promise;

        if (!cancelled) setStatus('ready');
      } catch (err) {
        if (!cancelled && !(err && err.name === 'RenderingCancelledException')) {
          setStatus('error');
        }
      }
    })();

    return () => {
      cancelled = true;
      try {
        if (renderTask) renderTask.cancel();
      } catch {}
      try {
        if (loadingTask) loadingTask.destroy();
      } catch {}
    };
  }, [src]);

  if (status === 'error') {
    return (
      <div className="certificate-preview certificate-preview-placeholder">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
        <span>Preview tidak dapat dimuat.</span>
      </div>
    );
  }

  return (
    <div className={`certificate-preview ${status === 'ready' ? 'ready' : ''}`}>
      {status === 'loading' && (
        <div className="certificate-preview-loading">
          <span className="spinner"></span>
        </div>
      )}
      <canvas ref={canvasRef} />
    </div>
  );
}

export default function Certificate() {
  return (
    <section className="certificate animate-on-scroll" id="certificate">
      <div className="container">
        <div className="certificate-header animate-on-scroll">
          <h2 className="section-title">
            My <span>Certificates</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="certificate-grid">
          {certificateData.map((item, index) => (
            <a
              className="certificate-card animate-on-scroll"
              key={item.title}
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="certificate-image">
                <CertificatePreview key={item.file} src={item.file} />
              </div>

              <div className="certificate-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}