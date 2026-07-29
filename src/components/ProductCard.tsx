import { Link } from 'react-router-dom';
import { useCart } from '../cart/useCart';
import { eur, type Product } from '../data/catalog';
import './ProductCard.css';

type Props = {
  product: Product;
  /** 'preview' is the single-CTA card used on the home page. */
  variant?: 'preview' | 'full';
};

export default function ProductCard({ product, variant = 'full' }: Props) {
  const { add } = useCart();
  const to = `/product/${product.id}`;

  const quickAdd = () => add(product.id, product.subPrice ? 'sub' : 'once', 1);

  return (
    <article className="card">
      {/* Decorative twin of the title link — the accessible route is the heading below. */}
      <Link
        to={to}
        className="card__media media"
        style={{ backgroundImage: `url(${product.img})` }}
        tabIndex={-1}
        aria-hidden="true"
      >
        {product.label && <span className="card__label">{product.label}</span>}
      </Link>

      <div className="card__body">
        <h3 className="card__name">
          <Link to={to} className="card__name-link">
            {product.name}
          </Link>
        </h3>
        <p className="card__line">{product.line}</p>

        <div className="card__prices">
          <span className="card__price">{eur(product.once)}</span>
          {product.subPrice && (
            <span className="card__sub">or {eur(product.subPrice)} / month</span>
          )}
        </div>

        {variant === 'preview' ? (
          <button type="button" className="btn btn--ink card__cta" onClick={quickAdd}>
            Begin the ritual
          </button>
        ) : (
          <div className="card__actions">
            <Link to={to} className="btn btn--ghost card__cta">
              View
            </Link>
            <button type="button" className="btn btn--ink card__cta" onClick={quickAdd}>
              Add
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
