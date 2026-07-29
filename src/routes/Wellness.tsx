import { Link } from 'react-router-dom';
import './Wellness.css';

const GLANCE = [
  { value: '25', unit: 'ml', label: 'Daily dose · one shot' },
  { value: '4', unit: '', label: 'Whole-food ingredients' },
  { value: '≥5', unit: 'mg*', label: 'Olive polyphenols / serving' },
  { value: '0', unit: '', label: 'Additives · sugars · fillers' },
];

const OIL_COMPOUNDS = [
  {
    title: 'Oleic acid',
    sub: 'Monounsaturated fat (omega-9) · ~70–80% of the oil',
    body: 'The backbone of the oil. Diets high in monounsaturated fat, in place of saturated fat, are studied for their role in maintaining normal blood cholesterol levels as part of a balanced diet.',
  },
  {
    title: 'Polyphenols',
    sub: 'Hydroxytyrosol · oleuropein · oleocanthal',
    body: 'The antioxidant fraction, and the reason a good oil tastes peppery and bitter. Oleocanthal is the compound behind the throat-catch at the back of a fresh shot.',
    claim: true,
  },
  {
    title: 'Vitamin E',
    sub: 'Alpha-tocopherol · fat-soluble',
    body: 'A fat-soluble vitamin that contributes to the protection of cells from oxidative stress — and one that is better absorbed alongside dietary fat, which the oil conveniently provides.',
  },
];

const LEMON_COMPOUNDS = [
  {
    title: 'Vitamin C',
    sub: 'Ascorbic acid · water-soluble',
    body: 'Contributes to normal energy-yielding metabolism, normal immune function, and the reduction of tiredness and fatigue — established EFSA nutrient functions. It also improves the absorption of non-haem (plant) iron from the same meal.',
  },
  {
    title: 'Flavonoids',
    sub: 'Hesperidin · eriocitrin · citrus polyphenols',
    body: 'The plant compounds concentrated in citrus peel and juice, widely studied as dietary antioxidants and a defining feature of a citrus-rich diet.',
  },
  {
    title: 'Citric acid & water',
    sub: 'Organic acid · flavour & freshness',
    body: 'Beyond taste, starting the day with fluid supports rehydration after the overnight fast. The brightness of lemon is also what makes a spoon of oil pleasant enough to actually repeat.',
  },
];

const FASTED = [
  {
    n: '01',
    title: 'Clean absorption',
    body: 'With an empty gut, fat-soluble compounds — polyphenols, vitamin E — arrive without competing with a full meal, and the oil itself carries them.',
  },
  {
    n: '02',
    title: 'Digestive priming',
    body: 'Dietary fat gently stimulates bile release and gastric emptying — a soft signal that the digestive day has begun, ahead of breakfast.',
  },
  {
    n: '03',
    title: 'Steadier first meal',
    body: 'Fat and fibre eaten before carbohydrate are studied for blunting the post-meal glucose rise. A little fat first may take the edge off the breakfast that follows.',
  },
  {
    n: '04',
    title: 'Satiety & rhythm',
    body: 'Fat is the most satiating macronutrient. Beyond biology, a fixed morning cue is one of the most reliable ways to make any habit stick.',
  },
];

const TABLE_ROWS = [
  ['Oleic acid', 'Olive oil', 'Monounsaturated fat; blood-cholesterol maintenance', 'TBD', false],
  ['Polyphenols (HT)', 'Olive oil', 'Protection of blood lipids from oxidative stress', '≥5 mg', true],
  ['Oleocanthal', 'Olive oil', 'Anti-inflammatory research interest', 'TBD', false],
  ['Vitamin E', 'Olive oil', 'Protection of cells from oxidative stress', 'TBD', false],
  ['Vitamin C', 'Lemon', 'Immune function; iron absorption; anti-fatigue', 'TBD', false],
  ['Hesperidin', 'Lemon', 'Citrus flavonoid; dietary antioxidant', 'TBD', false],
  ['Menthol', 'Wild mint', 'Aroma; traditional digestive association', 'trace', false],
  ['Sodium', 'Fleur de sel', 'Electrolyte; balances the blend', 'trace', false],
] as const;

const REFERENCES = [
  {
    n: '[1]',
    body: 'PREDIMED randomised trial — Mediterranean diet supplemented with extra virgin olive oil. ',
    muted: 'N Engl J Med. Full citation being finalised.',
  },
  {
    n: '[2]',
    body: 'EFSA Panel on Dietetic Products — olive oil polyphenols & oxidative stress; authorised claim, EU Reg. 432/2012.',
    muted: '',
  },
  {
    n: '[3]',
    body: 'EFSA nutrient function claims — vitamin C, vitamin E. ',
    muted: 'Register of authorised claims.',
  },
  {
    n: '[4]',
    body: 'Reviews on meal sequencing & post-prandial glucose response. ',
    muted: 'Citations being finalised with our advisors.',
  },
];

function CompoundCard({
  title,
  sub,
  body,
  claim,
}: {
  title: string;
  sub: string;
  body: string;
  claim?: boolean;
}) {
  return (
    <div className="compound">
      <div className="compound__kicker">Compound</div>
      <h3 className="compound__title">{title}</h3>
      <div className="compound__sub">{sub}</div>
      <p className="compound__body">{body}</p>
      {claim && (
        <div className="claim">
          <div className="claim__kicker">Authorised EU health claim</div>
          <p className="claim__body">
            “Olive oil polyphenols contribute to the protection of blood lipids from oxidative
            stress.” The claim applies at an intake of 5&nbsp;mg of hydroxytyrosol and its
            derivatives per day — the level AMUR is formulated to meet per serving.
            <span className="claim__muted"> (EU Reg. 432/2012; batch value pending assay.)</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default function Wellness() {
  return (
    <main>
      {/* HERO */}
      <section className="well-hero media">
        <div className="well-hero__scrim" />
        <div className="well-hero__copy">
          <div className="mono-label well-hero__kicker">Wellness &amp; Benefits — The Evidence</div>
          <h1 className="well-hero__title">
            What one honest shot <em>actually</em> does.
          </h1>
          <p className="well-hero__lede">
            A plain-language, evidence-informed look at the three things inside every 25&nbsp;ml of
            AMUR — extra virgin olive oil, lemon, and the simple act of taking it first thing, on an
            empty stomach.
          </p>
        </div>
      </section>

      {/* THESIS */}
      <section className="well-thesis">
        <div className="well-thesis__inner">
          <p className="well-thesis__lead">
            Food, not medicine. We don’t make cures — we make a well-made habit, and we’re honest
            about what the research does and doesn’t say.
          </p>
          <p className="well-thesis__note">
            Every mechanism below describes whole foods studied in nutrition science. Individual
            results vary, and no single ingredient replaces a balanced diet, movement, sleep, or
            medical care.
          </p>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="well-glance">
        <div className="well-glance__grid">
          {GLANCE.map((stat) => (
            <div className="well-glance__cell" key={stat.label}>
              <div className="well-glance__value">
                {stat.value}
                {stat.unit && <span className="well-glance__unit">{stat.unit}</span>}
              </div>
              <div className="well-glance__label">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="well-glance__note">
          *Target value; final polyphenol assay per batch pending independent lab confirmation.
        </p>
      </section>

      {/* 01 · OLIVE OIL */}
      <section className="well-ingredient well-ingredient--shell">
        <div className="wrap well-ingredient__grid">
          <div className="well-ingredient__aside">
            <div className="well-ingredient__media media well-ingredient__media--oil" />
            <div className="well-ingredient__index">01 — Extra Virgin Olive Oil</div>
            <h2 className="well-ingredient__title">
              The most-studied fat in the Mediterranean diet.
            </h2>
            <p className="well-ingredient__lede">
              Cold-pressed from an early Tuscan harvest and protected from heat and light, extra
              virgin olive oil keeps the fragile compounds that separate it from refined oils. Three
              of them are worth knowing.
            </p>
          </div>
          <div className="well-ingredient__cards">
            {OIL_COMPOUNDS.map((compound) => (
              <CompoundCard key={compound.title} {...compound} />
            ))}
          </div>
        </div>
      </section>

      {/* 02 · LEMON */}
      <section className="well-ingredient">
        <div className="wrap well-ingredient__grid well-ingredient__grid--flip">
          <div className="well-ingredient__cards">
            {LEMON_COMPOUNDS.map((compound) => (
              <CompoundCard key={compound.title} {...compound} />
            ))}
          </div>
          <div className="well-ingredient__aside">
            <div className="well-ingredient__media media well-ingredient__media--lemon" />
            <div className="well-ingredient__index">02 — Amalfi Lemon</div>
            <h2 className="well-ingredient__title">Bright by nature, useful by chemistry.</h2>
            <p className="well-ingredient__lede">
              Sun-grown citrus does more than lift the flavour. Its vitamin C and flavonoids are
              among the best-characterised nutrients in food science — and pairing them with fat and
              iron-rich foods is where the everyday value shows up.
            </p>
          </div>
        </div>
      </section>

      {/* 03 · EMPTY STOMACH */}
      <section className="well-fasted">
        <div className="wrap">
          <div className="well-fasted__head">
            <div className="well-fasted__index">03 — On An Empty Stomach</div>
            <h2 className="well-fasted__title">
              Why the <em>timing</em> matters as much as the shot.
            </h2>
            <p className="well-fasted__lede">
              Taking AMUR first thing — before coffee, before food — isn’t folklore for its own
              sake. There are a few plain, mechanistic reasons a fasted morning dose makes sense.
            </p>
          </div>
          <div className="well-fasted__grid">
            {FASTED.map((item) => (
              <div className="well-fasted__cell" key={item.n}>
                <div className="well-fasted__n">{item.n}</div>
                <h4 className="well-fasted__cell-title">{item.title}</h4>
                <p className="well-fasted__cell-body">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="well-fasted__note">
            Mechanisms describe general nutrition science, not guaranteed outcomes. If you are
            pregnant, managing a condition, or on medication, speak with your doctor before changing
            your routine.
          </p>
        </div>
      </section>

      {/* FULL BREAKDOWN */}
      <section className="well-table">
        <div className="well-table__inner">
          <div className="well-table__head">
            <h2 className="well-table__title">The full breakdown</h2>
            <span className="well-table__unit">Per 25 ml serving*</span>
          </div>
          <div className="well-table__scroll">
            <table className="well-table__table">
              <thead>
                <tr>
                  <th>Compound</th>
                  <th>Source</th>
                  <th>Studied role</th>
                  <th className="is-right">Amount*</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(([compound, source, role, amount, highlight]) => (
                  <tr key={compound}>
                    <td className="well-table__compound">{compound}</td>
                    <td className="well-table__muted">{source}</td>
                    <td className="well-table__muted">{role}</td>
                    <td className={`well-table__amount${highlight ? ' is-confirmed' : ''}`}>
                      {amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="well-table__note">
            *Amounts marked TBD are being quantified per batch by an independent laboratory.
            Health-claim wording follows EU Regulation 1924/2006 and 432/2012.
          </p>
        </div>
      </section>

      {/* REFERENCES */}
      <section className="well-refs">
        <div className="well-refs__panel">
          <div className="well-refs__kicker">Evidence &amp; references</div>
          <div className="well-refs__grid">
            {REFERENCES.map((ref) => (
              <div className="well-refs__item" key={ref.n}>
                <span className="well-refs__n">{ref.n}</span>
                <p className="well-refs__body">
                  {ref.body}
                  {ref.muted && <span className="well-refs__muted">{ref.muted}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER + CTA */}
      <section className="well-cta">
        <div className="well-cta__inner">
          <h2 className="well-cta__title">Good ingredients, honestly explained.</h2>
          <p className="well-cta__body">
            AMUR is a food product intended to complement a balanced lifestyle. It is not a medicine
            and is not intended to diagnose, treat, cure, or prevent any disease. Statements
            referencing EU-authorised claims apply only where the stated nutrient thresholds are
            met; per-batch values are being confirmed by independent testing. Nothing here is
            medical advice — consult a qualified professional for your individual needs.
          </p>
          <Link to="/shop" className="btn btn--accent well-cta__btn">
            Begin the ritual
          </Link>
        </div>
      </section>
    </main>
  );
}
