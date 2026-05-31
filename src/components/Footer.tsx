import { Link } from 'react-router-dom';
import './Footer.css';

interface FooterProps {
  variant?: 'full' | 'slim';
}

export default function Footer({ variant = 'full' }: FooterProps) {
  if (variant === 'slim') {
    return (
      <footer className="footer footer--slim">
        <span className="footer__logo">AMUR</span>
        <span className="footer__legal-text">© AMUR · Toscana · MMXXVI</span>
        <span className="footer__legal-text">Made slow · Poured bold</span>
      </footer>
    );
  }

  return (
    <footer className="footer footer--full">
      <div className="footer__brand">
        <span className="footer__logo">AMUR</span>
        <p className="footer__tagline">Olive oil from northern Tuscany.<br />Pressed slow, poured bold.</p>
      </div>
      <div className="footer__col">
        <h4 className="footer__heading">Shop</h4>
        <ul className="footer__links">
          <li><Link to="/waitlist">Single Estate</Link></li>
          <li><Link to="/waitlist">The Signature</Link></li>
          <li><Link to="/waitlist">Gift Sets</Link></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 className="footer__heading">House</h4>
        <ul className="footer__links">
          <li><Link to="/story">Story</Link></li>
          <li><Link to="/provenance">Provenance</Link></li>
          <li><Link to="/olive-school">Olive School</Link></li>
          <li><Link to="/roots">Roots</Link></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 className="footer__heading">Care</h4>
        <ul className="footer__links">
          <li><Link to="/waitlist">Shipping</Link></li>
          <li><Link to="/waitlist">Returns</Link></li>
          <li><Link to="/waitlist">Contact</Link></li>
        </ul>
      </div>
      <div className="footer__legal">
        <span>© AMUR · Toscana · MMXXVI</span>
        <span>Made slow · Poured bold</span>
      </div>
    </footer>
  );
}
