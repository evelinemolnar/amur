import { useState } from 'react';
import { useCart } from '../cart/useCart';
import { CATALOG, SUB_PLANS, eur, savingsPercent, type ProductId } from '../data/catalog';
import './Subscribe.css';

const BENEFITS = [
  { title: 'Delivered every 30 days', body: 'On your schedule, complimentary delivery.' },
  { title: 'Member pricing', body: 'The best price on every ritual.' },
  { title: 'Pause or cancel easily', body: 'No commitment, no friction.' },
  { title: 'Early access & ritual guide', body: 'First to new blends, plus a complimentary guide.' },
];

export default function Subscribe() {
  const [selected, setSelected] = useState<ProductId>('ritual');
  const { add } = useCart();

  const selectedProduct = CATALOG[selected];
  const selectedPrice = selectedProduct.subPrice ?? selectedProduct.once;

  return (
    <main className="sub">
      <div className="sub__inner">
        <header className="sub__head">
          <div className="eyebrow sub__eyebrow">Subscription</div>
          <h1 className="sub__title">
            Good rituals are <em>repeated.</em>
          </h1>
          <p className="sub__lede">
            Choose a cadence. Save with member pricing. Pause or cancel anytime.
          </p>
        </header>

        <div className="sub__plans">
          {SUB_PLANS.map((plan) => {
            const product = CATALOG[plan.id];
            const price = product.subPrice ?? product.once;
            const save = savingsPercent(plan.id);
            const active = selected === plan.id;
            return (
              <button
                type="button"
                key={plan.id}
                className={`plan${active ? ' is-active' : ''}`}
                onClick={() => setSelected(plan.id)}
                aria-pressed={active}
              >
                {plan.badge && <span className="plan__badge">{plan.badge}</span>}
                <h3 className="plan__name">{plan.name}</h3>
                <p className="plan__line">{plan.line}</p>
                <div className="plan__price">
                  <span className="plan__amount">{eur(price)}</span>
                  <span className="plan__per">/ month</span>
                </div>
                <p className="plan__save">
                  {save ? `Save ${save}% vs one-time` : 'Member pricing'}
                </p>
                <span className="plan__pill">{active ? 'Selected' : 'Choose'}</span>
              </button>
            );
          })}
        </div>

        <div className="sub__cta">
          <button type="button" className="btn btn--ink sub__cta-btn" onClick={() => add(selected, 'sub', 1)}>
            Start the ritual · {eur(selectedPrice)} / mo
          </button>
        </div>

        <div className="sub__benefits">
          {BENEFITS.map((benefit) => (
            <div className="sub__benefit" key={benefit.title}>
              <span className="sub__dash">—</span>
              <div>
                <h4 className="sub__benefit-title">{benefit.title}</h4>
                <p className="sub__benefit-body">{benefit.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
