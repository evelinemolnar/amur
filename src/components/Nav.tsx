import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cart/useCart';
import './Nav.css';

const LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/ritual', label: 'The Ritual' },
  { to: '/wellness', label: 'Wellness' },
  { to: '/story', label: 'Our Story' },
  { to: '/subscribe', label: 'Subscribe', accent: true },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, open } = useCart();

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="nav">
        <nav className="nav__inner">
          <Link to="/" className="nav__logo">
            amur
          </Link>

          <div className="nav__links">
            {LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav__link${link.accent ? ' nav__link--accent' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav__actions">
            <button type="button" className="nav__link linkbtn" onClick={open}>
              Bag ({count})
            </button>
            <button
              type="button"
              className="nav__link nav__menu-toggle linkbtn"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
            >
              Menu
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`menu-overlay${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <button type="button" className="menu__close linkbtn" onClick={() => setMenuOpen(false)}>
          Close
        </button>
        {LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`menu__link${link.accent ? ' menu__link--accent' : ''}`}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
