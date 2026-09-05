import { Link } from 'react-router-dom';
import './Footer.css';

const socials = [
  { label: 'GitHub', href: 'https://github.com/KAA070209' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-azka-saadi-nabhan-678156385/' },
  { label: 'Instagram', href: 'https://instagram.com/kaa_nbhn' },
  { label: 'Email', href: 'mailto:m.azkanabhan07@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link to="/" className="footer-brand-name">
            Portofolio | <span>Muhammad Azka Sa'adi Nabhan</span>
          </Link>

          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Muhammad Azka Sa'adi Nabhan. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
