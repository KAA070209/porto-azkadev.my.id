import { useEffect, useRef } from 'react';
import './CVPreviewModal.css';

const CV_URL = '/cv.pdf';
const CV_FILENAME = 'CV-Muhammad-Azka.pdf';

export default function CVPreviewModal({ isOpen, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = CV_URL;
    a.download = CV_FILENAME;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (!isOpen) return null;

  return (
    <div className="cv-modal-overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="cv-modal">
        <div className="cv-modal-header">
          <h3>CV Preview</h3>
          <div className="cv-modal-actions">
            <button className="cv-modal-download-btn" onClick={handleDownload}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </button>
            <button className="cv-modal-close" onClick={onClose} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <div className="cv-modal-body">
          <iframe src={CV_URL} title="CV Preview" className="cv-modal-iframe" />
        </div>
      </div>
    </div>
  );
}
