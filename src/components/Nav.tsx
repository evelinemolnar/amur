import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

interface NavProps {
  activePage?: string;
  light?: boolean;
}

const MENU_LINKS = [
  { to: '/story', label: 'Story' },
  { to: '/provenance', label: 'Provenance' },
  { to: '/olive-school', label: 'Olive School' },
  { to: '/roots', label: 'Roots' },
  { to: '/waitlist', label: 'Products' },
];

export default function Nav({ activePage, light }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const link = (to: string, label: string) => (
    <Link
      to={to}
      className={['nav__link', activePage === label ? 'nav__link--active' : ''].filter(Boolean).join(' ')}
    >
      {label}
    </Link>
  );

  return (
    <>
      <nav className={['nav', light ? 'nav--light' : ''].filter(Boolean).join(' ')}>
        <div className="nav__left">
          {/* Desktop links */}
          {link('/story', 'Story')}
          {link('/provenance', 'Provenance')}
          {link('/olive-school', 'Olive School')}
          {/* Mobile burger */}
          <button
            className="nav__burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
            type="button"
          >
            <span className={`nav__burger-icon${menuOpen ? ' nav__burger-icon--open' : ''}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>
        <Link to="/" className="nav__logo">AMUR</Link>
        <div className="nav__right">
          {link('/roots', 'Roots')}
          <Link
            to="/waitlist"
            className={['nav__link', activePage === 'Products' ? 'nav__link--active' : ''].filter(Boolean).join(' ')}
          >
            Products
          </Link>
          <Link
            to="/waitlist"
            className={['nav__cart', activePage === 'Waiting List' ? 'nav__link--active' : ''].filter(Boolean).join(' ')}
            aria-label="Waiting List"
          >
            <span className="nav__bag" aria-hidden="true" />
            <span>Waiting List</span>
          </Link>
          {/* Mobile bag icon */}
          <Link
            to="/waitlist"
            className="nav__mobile-cart"
            aria-label="Waiting List"
          >
            <span className="nav__bag" aria-hidden="true" />
          </Link>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav__drawer" onClick={() => setMenuOpen(false)}>
          <ul className="nav__drawer-list">
            {MENU_LINKS.map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  className={['nav__drawer-link', activePage === label ? 'nav__drawer-link--active' : ''].filter(Boolean).join(' ')}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
