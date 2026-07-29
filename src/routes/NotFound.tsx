import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="notfound__inner">
        <div className="eyebrow notfound__eyebrow">404</div>
        <h1 className="notfound__title">
          This page took the <em>morning off.</em>
        </h1>
        <p className="notfound__body">
          The page you were looking for isn’t here. The ritual, however, is exactly where you left
          it.
        </p>
        <div className="notfound__actions">
          <Link to="/" className="btn btn--ink">
            Back to home
          </Link>
          <Link to="/shop" className="btn btn--ghost">
            Shop the ritual
          </Link>
        </div>
      </div>
    </main>
  );
}
