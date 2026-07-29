import { Link } from 'react-router-dom';
import './Story.css';

const ORIGINS = [
  {
    img: '/assets/grove-walk.jpg',
    title: 'Tuscany',
    body: 'Early-harvest olives, cold-pressed for richness and polyphenols. Sourcing we can trace and stand behind.',
  },
  {
    img: '/assets/poolside.jpg',
    title: 'Amalfi',
    body: 'Sun-grown lemons from terraced coastal groves — the brightness at the centre of the blend.',
  },
];

export default function Story() {
  return (
    <main>
      <section className="story-hero media">
        <div className="story-hero__scrim" />
        <div className="story-hero__copy">
          <div className="eyebrow eyebrow--accent story-hero__kicker">Our Story</div>
          <h1 className="story-hero__title">
            A love letter to the Mediterranean <em>morning.</em>
          </h1>
        </div>
      </section>

      <section className="story-body">
        <div className="story-body__inner">
          <p className="story-body__lead">
            AMUR began with a simple belief: that wellness should feel like pleasure, and that the
            best rituals are the ones we actually keep.
          </p>
          <p className="story-body__para">
            We were drawn to the Mediterranean way of living — unhurried mornings, seasonal
            ingredients, sunlight, and the quiet luxury of doing one thing well. From that, a single
            25&nbsp;ml shot: cold-pressed Tuscan extra virgin olive oil, brightened with Amalfi
            lemon, finished with wild mint and fleur de sel.
          </p>
          <p className="story-body__para">
            Consistency over complexity. Pleasure over pressure. Less optimization, more living.
          </p>
        </div>
      </section>

      <section className="story-origins">
        <div className="wrap story-origins__grid">
          {ORIGINS.map((origin) => (
            <div key={origin.title}>
              <div
                className="story-origins__media media"
                style={{ backgroundImage: `url(${origin.img})` }}
              />
              <h3 className="story-origins__title">{origin.title}</h3>
              <p className="story-origins__body">{origin.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="story-cta">
        <div className="story-cta__inner">
          <h2 className="story-cta__title">
            A ritual today. A lifestyle <em>tomorrow.</em>
          </h2>
          <p className="story-cta__lede">
            AMUR is designed to grow into a larger world of daily Mediterranean wellness — objects,
            rituals, and moments made to be kept.
          </p>
          <Link to="/shop" className="btn btn--cream story-cta__btn">
            Shop the ritual
          </Link>
        </div>
      </section>
    </main>
  );
}
