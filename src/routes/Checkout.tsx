import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cart/useCart';
import { CATALOG, eur, priceOf } from '../data/catalog';
import './Checkout.css';

export default function Checkout() {
  const cart = useCart();
  const [ordered, setOrdered] = useState(false);

  const placeOrder = () => {
    cart.clear();
    setOrdered(true);
    window.scrollTo(0, 0);
  };

  if (ordered) {
    return (
      <main className="checkout">
        <div className="checkout__done">
          <div className="checkout__tick">✓</div>
          <h1 className="checkout__done-title">
            Your ritual is on its <em>way.</em>
          </h1>
          <p className="checkout__done-body">
            Thank you. This is a prototype — no payment was taken and no order was placed.
          </p>
          <Link to="/" className="btn btn--ink checkout__done-btn">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout">
      <div className="checkout__inner">
        <h1 className="checkout__title">Checkout</h1>
        <form className="checkout__grid" onSubmit={(event) => event.preventDefault()}>
          <div>
            <h2 className="checkout__section">Contact</h2>
            <input className="field field--full" placeholder="Email" aria-label="Email" />

            <h2 className="checkout__section">Delivery</h2>
            <div className="checkout__row checkout__row--2">
              <input className="field" placeholder="First name" aria-label="First name" />
              <input className="field" placeholder="Last name" aria-label="Last name" />
            </div>
            <input className="field field--full" placeholder="Address" aria-label="Address" />
            <div className="checkout__row checkout__row--3">
              <input className="field" placeholder="City" aria-label="City" />
              <input className="field" placeholder="Postcode" aria-label="Postcode" />
              <input className="field" placeholder="Country" aria-label="Country" />
            </div>

            <h2 className="checkout__section">Payment</h2>
            <input
              className="field field--full"
              placeholder="Card number (prototype)"
              aria-label="Card number"
            />
            <div className="checkout__row checkout__row--2">
              <input className="field" placeholder="MM / YY" aria-label="Expiry" />
              <input className="field" placeholder="CVC" aria-label="CVC" />
            </div>
          </div>

          <aside className="summary">
            <h2 className="summary__title">Order summary</h2>

            {cart.count === 0 && <p className="summary__empty">Your bag is empty.</p>}

            {cart.lines.map((line) => {
              const product = CATALOG[line.id];
              return (
                <div className="summary__line" key={`${line.id}-${line.mode}`}>
                  <span>
                    {product.name} <span className="summary__qty">× {line.qty}</span>
                  </span>
                  <span className="summary__amount">
                    {eur(priceOf(line.id, line.mode) * line.qty)}
                  </span>
                </div>
              );
            })}

            <div className="summary__row">
              <span>Subtotal</span>
              <span>{eur(cart.subtotal)}</span>
            </div>
            <div className="summary__row summary__row--last">
              <span>Delivery</span>
              <span>{cart.shippingLabel}</span>
            </div>
            <div className="summary__total">
              <span>Total</span>
              <span>{eur(cart.subtotal)}</span>
            </div>

            <button
              type="button"
              className="btn btn--ink btn--block summary__place"
              onClick={placeOrder}
              disabled={cart.count === 0}
            >
              Place order
            </button>
            <p className="summary__note">Prototype only — no payment is processed.</p>
          </aside>
        </form>
      </div>
    </main>
  );
}
