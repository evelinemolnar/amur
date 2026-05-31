import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';
import OliveBranch from '../components/OliveBranch';
import './Provenance.css';

const HISTORY = [
  { year: 'VIII a.C.', title: 'The Etruscans', body: 'Olive cultivation documented in the hills north of the Arno. The fruit pressed by hand.' },
  { year: '77 d.C.', title: 'Pliny writes', body: 'Naturalis Historia notes Luccan oil among the finest produced in the Roman world.' },
  { year: '1216', title: 'Lucca olive tax', body: 'The Republic of Lucca taxes olive oil as a luxury commodity. Groves multiply.' },
  { year: '1559', title: 'Medici census', body: 'Cosimo I commissions a survey of Tuscan agriculture. The hillside above Lucca is already producing oil.' },
  { year: '1998', title: 'DOP Toscano IGP', body: 'European protected designation establishes quality standards for Tuscan extra virgin olive oil.' },
  { year: '2015', title: 'A new wave', body: 'A younger generation of Tuscan producers returns to early harvest and cold-press methods.' },
  { year: '2026', title: 'AMUR begins', body: 'The first pressing. The first bottles.', accent: true },
];

const STEPS = [
  { num: '01', it: 'Raccolta', name: 'Harvest', desc: 'Hand-picked into shallow crates to avoid bruising. No nets — each olive is touched once.' },
  { num: '02', it: 'Cernita', name: 'Sort', desc: 'On a long wooden table, leaves and damaged fruit removed by hand before milling.' },
  { num: '03', it: 'Frangitura', name: 'Crush', desc: 'A granite wheel breaks the olive whole — skin, pulp, pit — into a coarse paste.' },
  { num: '04', it: 'Gramolatura', name: 'Knead', desc: 'The paste is folded slowly at below 17°C, allowing oil droplets to coalesce without heat.' },
  { num: '05', it: 'Estrazione', name: 'Extract', desc: 'A single centrifuge separates oil from water and solids. Unfiltered into tank.' },
  { num: '06', it: 'Imbottigliamento', name: 'Bottle', desc: 'Rested four months in stainless steel, then bottled to order. No further processing.' },
];

export default function Provenance() {
  return (
    <div className="provenance">
      <Nav activePage="Provenance" />

      {/* Hero */}
      <section className="prov-hero">
        <OliveBranch width={180} leaves={6} curve={10} style={{ color: 'var(--mustard)', opacity: 0.4, position: 'absolute', top: 60, left: 60, transform: 'rotate(-30deg)' }} />
        <Eyebrow label="AMUR · Provenienza · Toscana" center />
        <h1>Where it <em>comes from.</em></h1>
        <div className="prov-hero__coords">
          <span>43°50′ N</span>
          <span>10°30′ E</span>
          <span>800 m a.s.l.</span>
          <span>Lucca · IT</span>
        </div>
        <OliveBranch width={160} leaves={5} curve={8} style={{ color: 'var(--mustard)', opacity: 0.4, position: 'absolute', bottom: 60, right: 60, transform: 'rotate(150deg)' }} />
      </section>

      {/* Timeline */}
      <section className="prov-timeline">
        <div className="prov-container">
          <h2>A short history of the <em>Tuscan</em> drop.</h2>
          <div className="prov-timeline__rail">
            {HISTORY.map((node, i) => (
              <div key={i} className={`prov-tl-node${node.accent ? ' prov-tl-node--accent' : ''}`}>
                <div className="prov-tl-node__dot" />
                <span className="prov-tl-node__year">{node.year}</span>
                <span className="prov-tl-node__title">{node.title}</span>
                <p className="prov-tl-node__body">{node.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="prov-journey">
        <div className="prov-container">
          <Eyebrow label="I · Il Viaggio dell'Oliva" />
          <h2 className="prov-journey__h2">From the tree, in <em>six</em> steps.</h2>
          <div className="prov-journey__steps">
            {STEPS.map(s => (
              <div key={s.num} className="prov-step">
                <span className="prov-step__num">{s.num}</span>
                <span className="prov-step__it">{s.it}</span>
                <span className="prov-step__name">{s.name}</span>
                <p className="prov-step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trace */}
      <section className="prov-trace">
        <div className="prov-container prov-trace__grid">
          <div className="prov-trace__text">
            <Eyebrow label="II · Tracciabilità" />
            <h2>From the tree, to the bottle, <em>to your table.</em></h2>
            <p className="lead">
              A short journey, kept short on purpose. Every bottle carries a single origin: one hillside, one harvest, one pressing. Nothing blended, nothing stretched.
            </p>
          </div>
          <div className="prov-trace__media">
            <div className="prov-still-life">
              <iframe
                src="/olive-animation.html"
                className="prov-still-life__iframe"
                title="Olive to bottle animation"
                scrolling="no"
              />
            </div>
          </div>
        </div>
        <div className="prov-trace__divider">
          <div className="prov-trace__line" />
          <div className="prov-trace__branch-row">
            <OliveBranch width={80} leaves={5} curve={6} style={{ color: 'var(--mustard)' }} />
            <span className="prov-trace__dot" />
            <OliveBranch width={80} leaves={5} curve={6} style={{ color: 'var(--mustard)', transform: 'scaleX(-1)' }} />
          </div>
          <div className="prov-trace__line" />
        </div>
      </section>

      {/* CTA */}
      <section className="prov-cta">
        <div className="prov-container prov-cta__inner">
          <h2>Trace <em>another</em> bottle.</h2>
          <p className="lead">
            Type the batch number on the back of your bottle to see exactly where and when your oil was made.
          </p>
          <div className="prov-cta__buttons">
            <Button variant="primary" href="/waitlist">Join the waiting list</Button>
            <Button variant="ghost" href="/story">Read the story</Button>
          </div>
        </div>
      </section>

      <Footer variant="full" />
    </div>
  );
}
