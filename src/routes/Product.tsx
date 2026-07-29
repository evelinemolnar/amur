import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import type { PurchaseMode } from '../cart/context';
import { useCart } from '../cart/useCart';
import {
  ACCORDIONS,
  CATALOG,
  eur,
  isProductId,
  priceOf,
  savingsPercent,
  type ProductId,
} from '../data/catalog';
import './Product.css';

const FLAVOURS = [
  { label: 'Bright', value: 92 },
  { label: 'Herbaceous', value: 70 },
  { label: 'Peppery', value: 55 },
  { label: 'Smooth', value: 78 },
  { label: 'Mineral', value: 48 },
];

const HOW_TO = [
  { n: '01', title: 'Take it directly', body: 'One quiet shot, straight from the bottle.' },
  {
    n: '02',
    title: 'Pour into an AMUR glass',
    body: 'Make it a slower, considered moment.',
  },
  { n: '03', title: 'Alongside breakfast', body: 'Over greens, bread, or fresh tomatoes.' },
];

export default function Product() {
  const { id } = useParams();
  if (!isProductId(id)) return <Navigate to="/shop" replace />;
  // Keyed so mode, quantity and gallery selection reset when the product changes.
  return <ProductDetail key={id} product={CATALOG[id]} />;
}

function ProductDetail({ product }: { product: (typeof CATALOG)[ProductId] }) {
  const { add } = useCart();

  const [mode, setMode] = useState<PurchaseMode>(product.subPrice ? 'sub' : 'once');
  const [qty, setQty] = useState(1);
  const [image, setImage] = useState(product.img);
  const [openAccordion, setOpenAccordion] = useState('taste');

  const gallery = useMemo(
    () =>
      [
        product.img,
        '/assets/bottle-hero.jpg',
        '/assets/ingredients-grid.jpg',
        '/assets/prep-steps.jpg',
      ].filter((src, index, all) => all.indexOf(src) === index),
    [product.img],
  );

  const total = priceOf(product.id, mode) * qty;

  return (
    <>
      <main className="pdp">
        <div className="wrap">
          <Link to="/shop" className="pdp__back">
            ← Back to shop
          </Link>

          <div className="pdp__layout">
            {/* GALLERY */}
            <div className="pdp__gallery">
              <div className="pdp__hero media" style={{ backgroundImage: `url(${image})` }} />
              <div className="pdp__thumbs">
                {gallery.map((src) => (
                  <button
                    type="button"
                    key={src}
                    className={`pdp__thumb media${src === image ? ' is-active' : ''}`}
                    style={{ backgroundImage: `url(${src})` }}
                    onClick={() => setImage(src)}
                    aria-label="Show product image"
                  />
                ))}
              </div>
            </div>

            {/* PURCHASE PANEL */}
            <div className="pdp__panel">
              <div className="eyebrow pdp__no">AMUR No. 01</div>
              <h1 className="pdp__title">{product.name}</h1>
              <div className="pdp__blend">Lemon, Mint &amp; Fleur de Sel</div>
              <div className="pdp__rating">
                <span className="pdp__stars">★★★★★</span> Rating placeholder
              </div>
              <p className="pdp__lede">
                A 25&nbsp;ml daily shot of Tuscan extra virgin olive oil, Amalfi lemon, wild mint,
                and fleur de sel. {product.line}.
              </p>

              <div className="pdp__modes">
                <button
                  type="button"
                  className={`pdp__mode${mode === 'once' ? ' is-active' : ''}`}
                  onClick={() => setMode('once')}
                >
                  <span className="pdp__mode-copy">
                    <span className="pdp__mode-title">One-time purchase</span>
                    <span className="pdp__mode-note">No commitment</span>
                  </span>
                  <span className="pdp__mode-price">{eur(product.once)}</span>
                </button>

                {product.subPrice && (
                  <button
                    type="button"
                    className={`pdp__mode${mode === 'sub' ? ' is-active' : ''}`}
                    onClick={() => setMode('sub')}
                  >
                    <span className="pdp__mode-copy">
                      <span className="pdp__mode-title">
                        Subscribe &amp; save
                        <span className="pdp__save">Save {savingsPercent(product.id)}%</span>
                      </span>
                      <span className="pdp__mode-note">
                        Delivered every 30 days · pause anytime
                      </span>
                    </span>
                    <span className="pdp__mode-price">{eur(product.subPrice)} / mo</span>
                  </button>
                )}
              </div>

              <div className="pdp__qty">
                <span className="pdp__qty-label">Quantity</span>
                <div className="qty">
                  <button
                    type="button"
                    className="qty__btn"
                    aria-label="Decrease"
                    onClick={() => setQty((current) => Math.max(1, current - 1))}
                  >
                    −
                  </button>
                  <span className="qty__value">{qty}</span>
                  <button
                    type="button"
                    className="qty__btn"
                    aria-label="Increase"
                    onClick={() => setQty((current) => current + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="btn btn--ink btn--block pdp__add"
                onClick={() => add(product.id, mode, qty)}
              >
                <span>Begin the ritual</span>
                <span className="pdp__add-total">· {eur(total)}</span>
              </button>

              <div className="pdp__express">
                <button type="button" className="pdp__express-btn pdp__express-btn--primary">
                  Express checkout
                </button>
                <button type="button" className="pdp__express-btn">
                  Pay later
                </button>
              </div>

              <p className="pdp__delivery">
                Complimentary delivery on subscriptions · Ships in 2–4 days
              </p>

              <div className="pdp__flavour">
                <div className="pdp__flavour-title">Flavour profile</div>
                <div className="pdp__flavour-list">
                  {FLAVOURS.map((flavour) => (
                    <div className="pdp__flavour-row" key={flavour.label}>
                      <span className="pdp__flavour-label">{flavour.label}</span>
                      <span className="pdp__flavour-track">
                        <span className="pdp__flavour-bar" style={{ width: `${flavour.value}%` }} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ACCORDIONS */}
          <div className="pdp__accordions">
            {ACCORDIONS.map((item) => {
              const open = openAccordion === item.id;
              return (
                <div className="acc" key={item.id}>
                  <button
                    type="button"
                    className="acc__toggle"
                    onClick={() => setOpenAccordion(open ? '' : item.id)}
                    aria-expanded={open}
                  >
                    <span className="acc__title">{item.title}</span>
                    <span className="acc__sign">{open ? '–' : '+'}</span>
                  </button>
                  {open && <p className="acc__body">{item.body}</p>}
                </div>
              );
            })}
          </div>

          {/* HOW TO ENJOY */}
          <div className="pdp__howto">
            <h2 className="pdp__howto-title">How to enjoy it</h2>
            <div className="pdp__howto-grid">
              {HOW_TO.map((step) => (
                <div className="pdp__howto-card" key={step.n}>
                  <div className="pdp__howto-n">{step.n}</div>
                  <h3 className="pdp__howto-heading">{step.title}</h3>
                  <p className="pdp__howto-body">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile sticky CTA */}
      <div className="pdp-sticky">
        <div className="pdp-sticky__info">
          <span className="pdp-sticky__name">{product.name}</span>
          <span className="pdp-sticky__price">{eur(total)}</span>
        </div>
        <button
          type="button"
          className="btn btn--accent pdp-sticky__cta"
          onClick={() => add(product.id, mode, qty)}
        >
          Add to bag
        </button>
      </div>
    </>
  );
}
