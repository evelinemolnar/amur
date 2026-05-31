import { Link } from 'react-router-dom';
import './Nav.css';

interface NavProps {
  activePage?: string;
  light?: boolean;
}

export default function Nav({ activePage, light }: NavProps) {
  const link = (to: string, label: string) => (
    <Link
      to={to}
      className={['nav__link', activePage === label ? 'nav__link--active' : ''].filter(Boolean).join(' ')}
    >
      {label}
    </Link>
  );

  return (
    <nav className={['nav', light ? 'nav--light' : ''].filter(Boolean).join(' ')}>
      <div className="nav__left">
        {link('/story', 'Story')}
        {link('/provenance', 'Provenance')}
        {link('/olive-school', 'Olive School')}
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
      </div>
    </nav>
  );
}
