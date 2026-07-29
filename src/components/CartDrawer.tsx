import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { lineLabel } from '../cart/context';
import { useCart } from '../cart/useCart';
import { CATALOG, eur, priceOf } from '../data/catalog';
import './CartDrawer.css';

export default function CartDrawer() {
  const cart = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cart.isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') cart.close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cart]);

  const goto = (path: string) => {
    cart.close();
    navigate(path);
  };

  return (
    <>
      <div className={`drawer-overlay${cart.isOpen ? ' is-open' : ''}`} onClick={cart.close} />
      <aside className={`drawer${cart.isOpen ? ' is-open' : ''}`} aria-hidden={!cart.isOpen}>
        <div className="drawer__head">
          <span className="drawer__title">Your bag ({cart.count})</span>
          <button type="button" className="drawer__close linkbtn" onClick={cart.close} aria-label="Close bag">
            ×
          </button>
        </div>

        <div className="drawer__ship">
          <div className="drawer__ship-msg">{cart.shippingMessage}</div>
          <div className="drawer__ship-track">
            <div className="drawer__ship-bar" style={{ width: `${cart.shippingProgress}%` }} />
          </div>
        </div>

        <div className="drawer__body">
          {cart.count === 0 && (
            <div className="drawer__empty">
              <p className="drawer__empty-title">Your bag is empty</p>
              <button type="button" className="btn btn--ink drawer__empty-cta" onClick={() => goto('/shop')}>
                Shop the ritual
              </button>
            </div>
          )}

          {cart.lines.map((line, index) => {
            const product = CATALOG[line.id];
            const unit = priceOf(line.id, line.mode);
            return (
              <div className="drawer__line" key={`${line.id}-${line.mode}`}>
                <div
                  className="drawer__line-img media"
                  style={{ backgroundImage: `url(${product.img})` }}
                />
                <div className="drawer__line-body">
                  <div className="drawer__line-top">
                    <h4 className="drawer__line-name">{product.name}</h4>
                    <button
                      type="button"
                      className="drawer__remove linkbtn"
                      onClick={() => cart.remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                  <p className="drawer__line-mode">{lineLabel(line.mode)}</p>
                  <div className="drawer__line-foot">
                    <div className="qty qty--sm">
                      <button
                        type="button"
                        className="qty__btn"
                        aria-label="Decrease"
                        onClick={() => cart.setQty(index, -1)}
                      >
                        −
                      </button>
                      <span className="qty__value">{line.qty}</span>
                      <button
                        type="button"
                        className="qty__btn"
                        aria-label="Increase"
                        onClick={() => cart.setQty(index, 1)}
                      >
                        +
                      </button>
                    </div>
                    <span className="drawer__line-price">{eur(unit * line.qty)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {cart.count > 0 && (
          <div className="drawer__foot">
            <div className="drawer__subtotal">
              <span>Subtotal</span>
              <span className="drawer__subtotal-value">{eur(cart.subtotal)}</span>
            </div>
            <p className="drawer__note">Shipping &amp; taxes calculated at checkout.</p>
            <button
              type="button"
              className="btn btn--ink btn--block"
              onClick={() => goto('/checkout')}
            >
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
