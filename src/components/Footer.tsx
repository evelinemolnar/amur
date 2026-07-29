import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cols">
          <div>
            <div className="eyebrow eyebrow--accent footer__tagline">
              Mediterranean wellness, bottled
            </div>
            <p className="footer__blurb">
              Take your Mediterranean minute. One shot. One ritual. Every day.
            </p>
          </div>

          <div>
            <h4 className="footer__heading">Shop</h4>
            <div className="footer__list">
              <Link to="/shop" className="footer__link">
                All products
              </Link>
              <Link to="/subscribe" className="footer__link">
                Subscription
              </Link>
              <Link to="/ritual" className="footer__link">
                The Ritual
              </Link>
            </div>
          </div>

          <div>
            <h4 className="footer__heading">Discover</h4>
            <div className="footer__list">
              <Link to="/wellness" className="footer__link">
                Wellness
              </Link>
              <Link to="/story" className="footer__link">
                Our Story
              </Link>
              <span className="footer__soon">Journal — soon</span>
            </div>
          </div>

          <div>
            <h4 className="footer__heading">Follow</h4>
            <div className="footer__list">
              <a href="#" className="footer__link">
                Instagram
              </a>
              <a href="#" className="footer__link">
                TikTok
              </a>
              <a href="#" className="footer__link">
                Pinterest
              </a>
            </div>
          </div>
        </div>

        <div className="footer__wordmark">amur</div>

        <div className="footer__legal">
          <span>© 2026 AMUR — Prototype. Placeholder business information.</span>
          <span className="footer__legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Delivery</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
