import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';
import './OliveSchool.css';

const MYTHS = [
  {
    tag: 'Myth',
    claim: '"Olive oil can\'t handle heat."',
    truth: 'The smoke point of quality extra virgin is 190–210°C — higher than most cooking temperatures. Antioxidants actively protect the oil during heating.',
  },
  {
    tag: 'Myth',
    claim: '"Light olive oil is healthier."',
    truth: '"Light" means refined and stripped of polyphenols, flavour, and colour. It is nutritionally inferior to extra virgin.',
  },
  {
    tag: 'Partial',
    claim: '"Green oil means unripe and bad."',
    truth: 'Early-harvest green olives contain three to four times the polyphenols of ripe ones. The bitterness and pepper are signs of quality.',
  },
  {
    tag: 'Myth',
    claim: '"All extra virgin olive oils are the same."',
    truth: 'Variation is enormous — by cultivar, elevation, harvest date, and method. "Extra virgin" is a floor, not a flavour.',
  },
  {
    tag: 'Myth',
    claim: '"Italian olive oil is from Italy."',
    truth: 'Bottled in Italy ≠ grown in Italy. Most mass-market Italian bottles blend oil from Spain, Greece, Tunisia. Read the label for origin.',
  },
  {
    tag: 'Partial',
    claim: '"Cooking kills the health benefits."',
    truth: 'Heat reduces but does not erase polyphenols. At normal cooking temperatures, the majority survive. Frying is fine.',
  },
];

const HEALTH = [
  { roman: 'I', title: 'Heart & Arteries', body: 'Regular consumption associated with 30% lower risk of cardiovascular events in large Mediterranean cohort studies.', stat: '30% lower cardiovascular risk' },
  { roman: 'II', title: 'Anti-inflammatory', body: 'Oleocanthal, a polyphenol in fresh extra virgin, acts like ibuprofen on the same inflammatory pathways.', stat: 'Same pathway as ibuprofen' },
  { roman: 'III', title: 'Brain Health', body: 'Polyphenols cross the blood–brain barrier and have been linked to reduced cognitive decline in older populations.', stat: 'Crosses blood–brain barrier' },
  { roman: 'IV', title: 'Blood Sugar', body: '20–30% lower post-prandial glucose spike when olive oil is added to carbohydrate-heavy meals.', stat: '20–30% lower glucose spike' },
  { roman: 'V', title: 'Cancer Resilience', body: 'Reduced incidence of breast and colorectal cancers in populations with high olive oil consumption.', stat: 'Reduced cancer incidence' },
  { roman: 'VI', title: 'Skin & Longevity', body: 'Vitamin E, squalene, and polyphenols protect against oxidative stress. A consistent feature of Blue Zone diets.', stat: 'Blue Zone dietary staple' },
];

const ZONES = [
  { name: 'Sardinia', country: 'Italy', stat: '≈ 1/1,800 centenarians', highlight: true },
  { name: 'Ikaria', country: 'Greece', stat: '1 in 3 reach their 90s' },
  { name: 'Okinawa', country: 'Japan', stat: 'Lowest cancer rate (plant diet)' },
  { name: 'Nicoya', country: 'Costa Rica', stat: '2.5× average longevity' },
  { name: 'Loma Linda', country: 'California', stat: '+10 years average lifespan' },
];

const CHECKLIST = [
  'Harvest date — not just "best before"',
  'Dark glass or ceramic bottle',
  'Single origin — region, not continent',
  'DOP / IGP / biologico mark',
  'Free acidity listed on label',
  'Taste that catches in back of throat',
  'Price that respects the work',
];

const TASTE_STEPS = [
  { num: '01', it: 'Versare', name: 'Pour', desc: 'About a teaspoon into a small glass. No more.' },
  { num: '02', it: 'Annusare', name: 'Smell', desc: 'Cover the top and warm the glass in your hands. Lift your hand and inhale. Note the first thing you smell.' },
  { num: '03', it: 'Strippaggio', name: 'Slurp', desc: 'A short, sharp sip — slurp as you would a wine. Aerating breaks up the oil and releases the aromatics.' },
  { num: '04', it: 'Pizzicore', name: 'Cough', desc: 'Wait three seconds. If you feel a catch in the back of your throat and a cough reflex — that is polyphenols. A good sign.' },
];

function MythCard({ myth }: { myth: typeof MYTHS[0] }) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped(f => !f);
  return (
    <div
      className={`os-myth-card${flipped ? ' os-myth-card--flipped' : ''}`}
      role="button"
      tabIndex={0}
      onClick={toggle}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggle()}
    >
      <div className="os-myth-inner">
        <div className="os-myth-face os-myth-front">
          <span className={`os-myth-tag os-myth-tag--${myth.tag.toLowerCase()}`}>{myth.tag}</span>
          <p className="os-myth-claim">{myth.claim}</p>
          <span className="os-myth-foot">Tap to reveal</span>
        </div>
        <div className="os-myth-face os-myth-back">
          <span className="os-myth-tag os-myth-tag--truth">The truth</span>
          <p className="os-myth-truth">{myth.truth}</p>
        </div>
      </div>
    </div>
  );
}

export default function OliveSchool() {
  const [checked, setChecked] = useState<boolean[]>(Array(CHECKLIST.length).fill(false));
  const toggle = (i: number) => setChecked(c => c.map((v, idx) => idx === i ? !v : v));

  return (
    <div className="os">
      <Nav activePage="Olive School" />

      {/* Hero */}
      <section className="os-hero">
        <Eyebrow label="AMUR · La Scuola dell'Olio" center />
        <h1>Everything they didn't <em>tell</em> you about olive oil.</h1>
        <p className="os-hero__sub">
          Six common myths. One fraud statistic. A checklist for your next bottle. And how to taste like a professional.
        </p>
        <div className="os-hero__lessons">
          {['I · Myths', 'II · Fraud', 'III · Health', 'IV · Blue Zones', 'V · Checklist', 'VI · Tasting'].map(l => (
            <span key={l} className="os-hero__lesson">{l}</span>
          ))}
        </div>
      </section>

      {/* Myths */}
      <section className="os-myths">
        <div className="os-container">
          <Eyebrow label="I · Myths" />
          <h2>Six things <em>wrong</em> with what you've been told.</h2>
          <div className="os-myths__grid">
            {MYTHS.map((m, i) => <MythCard key={i} myth={m} />)}
          </div>
        </div>
      </section>

      {/* Fraud */}
      <section className="os-fraud">
        <div className="os-container os-fraud__inner">
          <div className="os-fraud__stat">
            <span className="os-fraud__big">73</span>
            <small>%</small>
          </div>
          <span className="os-fraud__source">UC Davis · Olive Center · 2010</span>
          <h2 className="os-fraud__h2">Most "extra virgin" olive oil <em>isn't.</em></h2>
          <p className="os-fraud__body">
            In 2010, the UC Davis Olive Center tested 186 imported olive oils sold as "extra virgin" in California supermarkets. 73% failed to meet the standard. Follow-up studies in Australia and the EU found similar rates.
          </p>
          <p className="os-fraud__body">
            The problem is cost. Real extra virgin — hand-harvested, early-pressed, properly stored — costs more to produce than mass-market prices allow. The difference goes into your food, not the label.
          </p>
          <p className="os-fraud__footnote">
            Olive oil fraud is the largest agricultural fraud in the European Union by volume.
          </p>
        </div>
      </section>

      {/* Health */}
      <section className="os-health">
        <div className="os-container">
          <Eyebrow label="III · Health" />
          <h2>What a tablespoon a day <em>actually</em> does.</h2>
          <div className="os-health__grid">
            {HEALTH.map(h => (
              <div key={h.roman} className="os-health-card">
                <span className="os-health-card__roman">{h.roman}</span>
                <h3 className="os-health-card__title">{h.title}</h3>
                <p className="os-health-card__body">{h.body}</p>
                <span className="os-health-card__stat">{h.stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Zones */}
      <section className="os-blue">
        <div className="os-container os-blue__inner">
          <div className="os-blue__text">
            <Eyebrow label="IV · Blue Zones" />
            <h2>Why <em>Sardinia</em> outlives the world.</h2>
            <p className="lead">
              Blue Zones are regions where people live measurably longer, healthier lives. Every one of them uses olive oil as the primary fat. Not a supplement. A staple.
            </p>
            <ul className="os-zones">
              {ZONES.map(z => (
                <li key={z.name} className={`os-zone${z.highlight ? ' os-zone--highlight' : ''}`}>
                  <span className="os-zone__dot" />
                  <span className="os-zone__name">{z.name}</span>
                  <span className="os-zone__country">{z.country}</span>
                  <span className="os-zone__stat">{z.stat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="os-pyramid">
            <p className="os-pyramid__title">The Mediterranean Pyramid · daily</p>
            <div className="os-pyramid__stack">
              {[
                { label: 'Red meat, sweets', tier: 'monthly', bg: 'rgba(66,71,31,0.12)' },
                { label: 'Eggs, poultry, fish', tier: 'weekly', bg: 'rgba(66,71,31,0.08)' },
                { label: 'Legumes, grains, nuts', tier: 'daily', bg: 'rgba(139,140,115,0.15)' },
                { label: 'Extra Virgin Olive Oil · 2–4 tbsp', tier: 'olive', bg: 'rgba(209,166,73,0.22)' },
                { label: 'Vegetables, fruit, herbs', tier: 'daily', bg: 'rgba(139,140,115,0.1)' },
                { label: 'Movement, sunlight, table', tier: 'base', bg: 'rgba(66,71,31,0.05)' },
              ].reverse().map((row, i) => (
                <div key={i} className={`os-pyramid__row os-pyramid__row--${row.tier}`} style={{ background: row.bg }}>
                  {row.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="os-check">
        <div className="os-container os-check__inner">
          <div>
            <Eyebrow label="V · How to spot a real bottle" />
            <h2>How to spot a <em>real</em> bottle.</h2>
            <p className="lead">Seven things that separate honest oil from imitation.</p>
          </div>
          <ul className="os-checklist">
            {CHECKLIST.map((item, i) => (
              <li
                key={i}
                className={`os-check-row${checked[i] ? ' os-check-row--on' : ''}`}
                onClick={() => toggle(i)}
              >
                <span className="os-check-box">{checked[i] && '✓'}</span>
                <span className="os-check-label">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Taste Steps */}
      <section className="os-taste">
        <div className="os-container">
          <Eyebrow label="VI · Tasting" />
          <h2 className="os-taste__h2">The <em>professional</em> sip, in four moves.</h2>
          <div className="os-taste__steps">
            {TASTE_STEPS.map(s => (
              <div key={s.num} className="os-taste-step">
                <span className="os-taste-step__num">{s.num}</span>
                <span className="os-taste-step__it">{s.it}</span>
                <span className="os-taste-step__name">{s.name}</span>
                <p className="os-taste-step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="os-cta">
        <div className="os-container os-cta__inner">
          <h2>Now taste with <em>intention</em>.</h2>
          <div className="os-cta__buttons">
            <Button variant="primary" href="/waitlist">Join the waiting list</Button>
            <Button variant="ghost" href="/provenance">Read provenance</Button>
          </div>
        </div>
      </section>

      <Footer variant="full" />
    </div>
  );
}
