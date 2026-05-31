import { useState, useRef } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Eyebrow from '../components/Eyebrow';
import OliveBranch from '../components/OliveBranch';
import './Waitlist.css';

const PRODUCTS = [
  {
    id: 'single-estate',
    name: 'Single Estate',
    ribbon: 'Single Estate',
    ribbonVariant: 'paper' as const,
    cat: 'The everyday',
    notes: 'Soft and grassy with a gentle almond finish. Cold-pressed within thirty-six hours of harvest — the oil for the table you set every day.',
    specs: [
      { k: 'Vessel', v: 'Ceramic · 500ml' },
      { k: 'Profile', v: 'Soft · Grassy' },
    ],
    image: '/products/serenita.jpeg',
    imageAlt: 'AMUR Single Estate — ceramic bottle',
  },
  {
    id: 'signature',
    name: 'The Signature',
    ribbon: 'Limited',
    ribbonVariant: 'coral' as const,
    cat: 'The keeper',
    notes: 'A bold first-press with a peppery finish, in a sculptural bottle that lives on long after the last drop. Made for the meals worth remembering.',
    specs: [
      { k: 'Vessel', v: 'Glass · 500ml' },
      { k: 'Profile', v: 'Bold · Peppery' },
    ],
    image: '/products/signature.png',
    imageAlt: 'AMUR The Signature — sculptural glass bottle',
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError(true);
      inputRef.current?.focus();
      return;
    }
    const existing: string[] = JSON.parse(localStorage.getItem('amur:waitlist') ?? '[]');
    if (!existing.includes(email)) {
      localStorage.setItem('amur:waitlist', JSON.stringify([...existing, email]));
    }
    setSubmitted(true);
  };

  return (
    <div className="wl">
      <Nav activePage="Waiting List" />

      {/* Intro */}
      <section className="wl-intro">
        <Eyebrow label="AMUR · Coming soon" center />
        <h1>Two oils. One <em>first harvest</em>.</h1>
        <p className="wl-intro__sub">
          The 2026 harvest is bottled and resting. Add yourself to the list and we'll reach out before the first bottles ship.
        </p>
      </section>

      {/* Products */}
      <section className="wl-products">
        <div className="wl-container">
          <div className="wl-products__grid">
            {PRODUCTS.map(p => (
              <article key={p.id} className="wl-product">
                <div className="wl-product__shot">
                  <span className={`wl-product__ribbon wl-product__ribbon--${p.ribbonVariant}`}>{p.ribbon}</span>
                  <img src={p.image} alt={p.imageAlt} className="wl-product__img" />
                </div>
                <div className="wl-product__body">
                  <span className="wl-product__cat">{p.cat}</span>
                  <h2 className="wl-product__name">{p.name}</h2>
                  <p className="wl-product__notes">{p.notes}</p>
                  <div className="wl-product__specs">
                    {p.specs.map(s => (
                      <div key={s.k} className="wl-product__spec">
                        <span className="wl-product__spec-k">{s.k}</span>
                        <span className="wl-product__spec-v">{s.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist form */}
      <section className="wl-section">
        <div className="wl-panel">
          <div className="wl-panel__branch">
            <OliveBranch width={190} leaves={7} curve={6} style={{ color: 'var(--mustard)' }} />
          </div>
          <Eyebrow label="Join the waiting list" center />
          <h2 className="wl-panel__h2">Be the first to <em>pour</em>.</h2>
          <p className="wl-panel__sub">
            We'll send one note when the bottles are ready. No newsletter, no noise.
          </p>

          {!submitted ? (
            <>
              <form className="wl-form" onSubmit={handleSubmit} noValidate>
                <input
                  ref={inputRef}
                  type="email"
                  className={`wl-form__input${error ? ' wl-form__input--error' : ''}`}
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(false); }}
                  aria-label="Email address"
                />
                <button type="submit" className="wl-form__btn">Join the list</button>
              </form>
              <p className="wl-micro">No noise. One note, when there's something worth saying.</p>
            </>
          ) : (
            <div className="wl-thanks">
              <span className="wl-thanks__mark">"</span>
              <p className="wl-thanks__line">
                You're on the list. We'll be in touch when the first bottles are ready.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer variant="slim" />
    </div>
  );
}
