import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';
import OliveBranch from '../components/OliveBranch';
import './Story.css';

const TASTING_NOTES = [
  { roman: 'i', name: 'Cut grass', desc: 'Fresh, herbaceous; the green note that lingers on the nose first.' },
  { roman: 'ii', name: 'Artichoke', desc: 'Bitter and clean — proof the olives were picked early.' },
  { roman: 'iii', name: 'Almond', desc: 'Round, milk-soft, the centre of the oil. A long finish.' },
  { roman: 'iv', name: 'Tomato leaf', desc: 'Sun-warmed, summer-garden. Brightest in the first month.' },
  { roman: 'v', name: 'White pepper', desc: 'A polyphenol catch at the back of the throat. Cough once. Smile.' },
];

const STATS = [
  { num: '800', unit: 'm', label: 'Elevation' },
  { num: '5', unit: '', label: 'Generations' },
  { num: '3', unit: '', label: 'Cultivars' },
  { num: '36', unit: 'h', label: 'Tree to press' },
  { num: '17', unit: '°C', label: 'Max press temp' },
];

export default function Story() {
  return (
    <div className="story">
      <Nav activePage="Story" />

      {/* Hero */}
      <section className="story-hero">
        <div className="story-hero__deco story-hero__deco--tl">
          <OliveBranch width={180} leaves={6} curve={10} style={{ color: 'var(--mustard)', opacity: 0.45, transform: 'rotate(-30deg)' }} />
        </div>
        <Eyebrow label="AMUR · La Storia · MMXXVI" center />
        <h1>
          From a grove above <em>Lucca</em>,<br />
          where the cypresses lean north.
        </h1>
        <p className="story-hero__sub">
          Tuscan extra virgin olive oil. Early harvest. Cold-pressed within thirty-six hours of picking.
        </p>
        <div className="story-hero__scroll">
          <span>Scroll</span>
          <div className="story-hero__line" />
        </div>
        <div className="story-hero__deco story-hero__deco--br">
          <OliveBranch width={160} leaves={5} curve={8} style={{ color: 'var(--mustard)', opacity: 0.45, transform: 'rotate(150deg)' }} />
        </div>
      </section>

      {/* La Terra */}
      <section className="story-section story-land">
        <div className="story-section__container story-section__container--2col">
          <div className="story-section__image-wrap">
            <img src="/images/grove.png" alt="Olive grove in Tuscany" className="story-section__img" />
          </div>
          <div className="story-section__text">
            <Eyebrow label="I · La Terra" />
            <h2>A hill, a sea breeze, and trees <em>older</em> than us.</h2>
            <p className="lead">
              A single hillside above Lucca, where the Ligurian Sea pushes a salt-laced wind north through the Apennine passes. Rosemary, wild thyme, fig trees at the field edges. Dry stone walls. A soil of limestone and clay that drains fast, stresses the trees gently, and pushes all the flavour into the fruit.
            </p>
            <p className="body italic-secondary">
              Some of the trees are over a hundred years old. Hand-pruned each winter to keep the canopy open. Old trees yield less fruit, but what they yield has a depth that younger plantings take decades to reach.
            </p>
          </div>
        </div>
      </section>

      {/* La Raccolta */}
      <section className="story-harvest">
        <div className="story-section__container">
          <Eyebrow label="II · La Raccolta" />
          <h2 className="story-harvest__h2">
            Picked <em>green</em>,<br />
            while the fruit still tastes of the leaf.
          </h2>
          <p className="body story-harvest__body">
            Harvest begins in early October, before the olives have fully ripened. Green olives are harder to press, yield less oil per kilo, and demand more from the mill. They also carry three to four times the polyphenols of a ripe olive — the compounds responsible for the pepper catch at the back of the throat, the anti-inflammatory action, the long shelf life.
          </p>
          <div className="story-harvest__stat">
            <div className="story-harvest__stat-num">
              <span className="story-harvest__big">0.15</span>
              <span className="story-harvest__pct">%</span>
            </div>
            <div className="story-harvest__stat-meta">
              <span className="story-harvest__mono">Free acidity (oleic)</span>
              <p className="story-harvest__note">
                Italian law calls anything below 0.8% extra virgin. We finish the harvest five times below that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La Spremitura */}
      <section className="story-section story-press">
        <div className="story-section__container story-section__container--2col story-section__container--reverse">
          <div className="story-section__text">
            <Eyebrow label="III · La Spremitura" />
            <h2>Pressed within thirty-six hours. <em>Below</em> seventeen degrees.</h2>
            <p className="lead">
              Speed and temperature are everything. Once picked, oxidation begins. Every hour between grove and mill is an hour of flavour lost. We press within thirty-six hours, at temperatures that preserve the aromatics that heat would cook away.
            </p>
            <div className="story-press__specs">
              {[
                { k: 'Method', d: 'Single cold extraction · stone-to-bottle', v: 'Cold-pressed' },
                { k: 'Time', d: 'Maximum hours from harvest to mill', v: '≤ 36 h' },
                { k: 'Temperature', d: 'Held throughout malaxation', v: '< 17 °C' },
                { k: 'Filtration', d: 'Lightly, through cotton — never bleached', v: 'Unfiltered ✕' },
              ].map(row => (
                <div key={row.k} className="story-press__spec-row">
                  <span className="story-press__spec-k">{row.k}</span>
                  <span className="story-press__spec-d">{row.d}</span>
                  <span className="story-press__spec-v">{row.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="story-section__image-wrap">
            <img src="/images/olives-hand.jpg" alt="Freshly picked olives" className="story-section__img" />
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="story-numbers">
        <div className="story-section__container">
          <div className="story-numbers__layout">
            <p className="story-numbers__title">By the press, in numbers.</p>
            <div className="story-numbers__grid">
              {STATS.map(s => (
                <div key={s.label} className="story-numbers__cell">
                  <span className="story-numbers__num">
                    {s.num}
                    {s.unit && <small>{s.unit}</small>}
                  </span>
                  <span className="story-numbers__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tasting */}
      <section className="story-section story-tasting">
        <div className="story-section__container">
          <Eyebrow label="IV · Sulla Lingua" />
          <h2>On the <em>tongue</em>.</h2>
          <p className="lead">
            Five notes to chase across a spoon. Try it warm, on torn bread; or cold, over burrata and a slice of peach.
          </p>
          <div className="story-tasting__grid">
            {TASTING_NOTES.map(n => (
              <div key={n.roman} className="story-tasting__note">
                <span className="story-tasting__roman">{n.roman}.</span>
                <span className="story-tasting__name">{n.name}</span>
                <p className="story-tasting__desc">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="story-manifesto">
        <div className="story-section__container story-manifesto__inner">
          <OliveBranch width={140} leaves={5} curve={7} style={{ color: 'var(--mustard)', opacity: 0.4, position: 'absolute', left: 40, top: '50%', transform: 'translateY(-50%)' }} />
          <h2 className="story-manifesto__h2">
            Two worlds.<br />One <em>oil</em>.
          </h2>
          <p className="story-manifesto__close">
            Soft on bread at noon.<br />
            Bold over rigatoni at midnight.<br />
            Pressed cold. Poured slow.
          </p>
          <OliveBranch width={140} leaves={5} curve={7} style={{ color: 'var(--mustard)', opacity: 0.4, position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%) scaleX(-1)' }} />
        </div>
      </section>

      {/* CTA */}
      <section className="story-cta">
        <div className="story-section__container story-cta__inner">
          <div className="story-cta__branch">
            <OliveBranch width={60} leaves={4} fruit={false} style={{ color: 'var(--mustard)' }} />
            <span className="story-cta__now">Now</span>
            <OliveBranch width={60} leaves={4} fruit={false} style={{ color: 'var(--mustard)', transform: 'scaleX(-1)' }} />
          </div>
          <h2>Taste it.</h2>
          <p className="lead">
            The 2026 harvest is bottled and resting in our cellar. Order before mid-July to ensure the freshest oil of the year.
          </p>
          <div className="story-cta__buttons">
            <Button variant="primary" href="/waitlist">Join the waiting list</Button>
            <Button variant="ghost" href="/">Back to the frame</Button>
          </div>
        </div>
      </section>

      <Footer variant="full" />
    </div>
  );
}
