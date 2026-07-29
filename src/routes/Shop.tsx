import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { CATALOG, PRODUCT_IDS, type ProductId } from '../data/catalog';
import './Shop.css';

type Filter = 'all' | 'daily' | 'bundles' | 'subscriptions' | 'gifts';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'daily', label: 'Daily shots' },
  { id: 'bundles', label: 'Bundles' },
  { id: 'subscriptions', label: 'Subscriptions' },
  { id: 'gifts', label: 'Gifts' },
];

const MEMBERSHIP: Record<Exclude<Filter, 'all'>, ProductId[]> = {
  daily: ['daily'],
  bundles: ['week', 'ritual', 'morning', 'travel'],
  subscriptions: ['week', 'ritual', 'morning'],
  gifts: ['gift', 'travel'],
};

export default function Shop() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = filter === 'all' ? PRODUCT_IDS : MEMBERSHIP[filter];

  return (
    <main className="shop">
      <div className="wrap">
        <header className="shop__head">
          <div className="eyebrow shop__eyebrow">Shop</div>
          <h1 className="shop__title">
            Choose your <em>ritual.</em>
          </h1>
          <p className="shop__lede">
            One morning, seven mornings, or a month of Mediterranean wellness.
          </p>
        </header>

        <div className="shop__filters">
          {FILTERS.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`shop__filter${filter === item.id ? ' is-active' : ''}`}
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="shop__grid">
          {visible.map((id) => (
            <ProductCard key={id} product={CATALOG[id]} />
          ))}
        </div>
      </div>
    </main>
  );
}
