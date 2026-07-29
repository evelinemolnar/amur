import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { CATALOG, CORE_PRODUCT_IDS } from '../data/catalog';
import './Home.css';

const EVIDENCE = [
  {
    tag: 'EVOO',
    title: 'Polyphenols',
    body: 'Hydroxytyrosol and oleocanthal — the peppery fraction, and the basis of the one health claim EU law actually allows olive oil.',
  },
  {
    tag: 'EVOO',
    title: 'Oleic acid',
    body: 'The monounsaturated backbone of the Mediterranean diet — the most-studied fat in nutrition science.',
  },
  {
    tag: 'LEMON',
    title: 'Vitamin C & flavonoids',
    body: 'Immune function, iron absorption, less fatigue — established nutrient roles, taken at the start of the day.',
  },
];

const LIFESTYLE = [
  {
    img: '/assets/breakfast.jpg',
    title: 'Morning',
    body: 'Before breakfast, beside a journal, or near an open window.',
  },
  {
    img: '/assets/pilates.jpg',
    title: 'Movement',
    body: 'Before or after Pilates, training, yoga, or a long walk.',
  },
  {
    img: '/assets/poolside.jpg',
    title: 'Travel',
    body: 'At a hotel, a lounge, a coastal terrace, or inside a refined travel case.',
  },
];

const REVIEWS = [
  '“The easiest part of my morning routine.”',
  '“It tastes like summer in Italy.”',
  '“Finally, wellness that does not feel clinical.”',
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero__copy">
          <div className="eyebrow hero__eyebrow">Mediterranean wellness, bottled</div>
          <h1 className="hero__title">
            Take your
            <br />
            Mediterranean
            <br />
            <em>minute.</em>
          </h1>
          <p className="hero__lede">
            A daily 25&nbsp;ml shot of Tuscan extra virgin olive oil, Amalfi lemon, wild mint, and
            fleur de sel.
          </p>
          <div className="hero__actions">
            <Link to="/shop" className="btn btn--ink">
              Shop the ritual
            </Link>
            <Link to="/wellness" className="btn btn--ghost">
              Discover the benefits
            </Link>
          </div>
          <div className="hero__scroll">
            <span className="hero__rule" />
            Scroll
          </div>
        </div>
        <div className="hero__media media" />
      </section>

      {/* MANIFESTO */}
      <section className="section">
        <div className="wrap manifesto">
          <div className="manifesto__media media" />
          <div>
            <div className="eyebrow manifesto__eyebrow">The AMUR philosophy</div>
            <h2 className="manifesto__title">
              Wellness, with <em>pleasure.</em>
            </h2>
            <p className="manifesto__lede">
              Wellness does not need to arrive in a complicated routine. Sometimes it begins with
              one beautifully made thing, taken slowly and consistently.
            </p>
            <p className="manifesto__note">
              Less optimization. More living. Some habits should simply taste beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* EVIDENCE TEASER */}
      <section className="section evidence">
        <div className="wrap evidence__grid">
          <div>
            <div className="mono-label evidence__eyebrow">The evidence</div>
            <h2 className="evidence__title">
              Four whole ingredients. Three compounds worth <em>knowing.</em>
            </h2>
            <p className="evidence__lede">
              No powders, no proprietary blends, nothing to explain away. Just cold-pressed oil and
              citrus — and a clear account of what the research does and doesn’t say.
            </p>
            <Link to="/wellness" className="btn btn--ghost-light evidence__cta">
              Read the full evidence
            </Link>
          </div>
          <div className="evidence__cards">
            {EVIDENCE.map((item) => (
              <div className="evidence__card" key={item.title}>
                <span className="evidence__tag">{item.tag}</span>
                <div>
                  <h3 className="evidence__card-title">{item.title}</h3>
                  <p className="evidence__card-body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE */}
      <section className="lifestyle">
        <div className="wrap">
          <h2 className="lifestyle__title">
            Made for real mornings. And the mornings <em>in between.</em>
          </h2>
          <div className="lifestyle__grid">
            {LIFESTYLE.map((item) => (
              <div key={item.title}>
                <div className="lifestyle__media media" style={{ backgroundImage: `url(${item.img})` }} />
                <h3 className="lifestyle__card-title">{item.title}</h3>
                <p className="lifestyle__card-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN */}
      <section className="campaign media">
        <div className="campaign__scrim" />
        <div className="campaign__copy">
          <h2 className="campaign__title">
            Feed your <em>glow.</em>
          </h2>
          <p className="campaign__lede">
            Your energy, skin, and rhythm reflect what you do consistently. Make the first thing
            something beautiful.
          </p>
        </div>
      </section>

      {/* SHOP PREVIEW */}
      <section className="section shop-preview">
        <div className="wrap">
          <div className="shop-preview__head">
            <h2 className="shop-preview__title">
              Choose your <em>ritual.</em>
            </h2>
          </div>
          <div className="shop-preview__grid">
            {CORE_PRODUCT_IDS.map((id) => (
              <ProductCard key={id} product={CATALOG[id]} variant="preview" />
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION BANNER */}
      <section className="subscribe-banner">
        <div className="wrap subscribe-banner__grid">
          <div>
            <div className="eyebrow eyebrow--accent subscribe-banner__eyebrow">Subscription</div>
            <h2 className="subscribe-banner__title">
              Good rituals are <em>repeated.</em>
            </h2>
            <ul className="subscribe-banner__list">
              <li>
                <span>—</span>Delivered every 30 days
              </li>
              <li>
                <span>—</span>Member pricing
              </li>
              <li>
                <span>—</span>Pause or cancel easily
              </li>
              <li>
                <span>—</span>Early access to new blends &amp; complimentary ritual guide
              </li>
            </ul>
            <Link to="/subscribe" className="btn btn--accent">
              Start the ritual
            </Link>
          </div>
          <div className="subscribe-banner__media media" />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section reviews">
        <div className="wrap reviews__grid">
          {REVIEWS.map((quote) => (
            <blockquote className="reviews__item" key={quote}>
              <p className="reviews__quote">{quote}</p>
              <cite className="reviews__cite">Placeholder review</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter__inner">
          <h2 className="newsletter__title">
            A little Mediterranean sun, delivered to your <em>inbox.</em>
          </h2>
          <form className="newsletter__form" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              className="newsletter__input"
            />
            <button type="submit" className="newsletter__submit">
              Subscribe
            </button>
          </form>
          <p className="newsletter__note">We treat your inbox with care. Unsubscribe anytime.</p>
        </div>
      </section>
    </main>
  );
}
