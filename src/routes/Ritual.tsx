import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MORNING_SCHEDULE, RITUAL_STEPS, RITUAL_TOTAL } from '../data/catalog';
import './Ritual.css';

const MARQUEE = ['Open', 'Breathe', 'Take the shot', 'Pause', 'Begin'];

const WEEKS = [
  {
    when: 'Day 01',
    title: 'A peppery catch',
    body: 'A good oil bites slightly at the back of the throat. That’s oleocanthal — the mark of a fresh, high-polyphenol harvest, not a fault.',
    lead: true,
  },
  {
    when: 'Week 01',
    title: 'The taste settles',
    body: 'The morning cue starts doing the work for you. Most people stop thinking about it by the seventh day.',
  },
  {
    when: 'Week 04',
    title: 'It becomes the anchor',
    body: 'One fixed point before the day starts. Nutrition science rewards consistency far more than intensity.',
  },
  {
    when: 'Always',
    title: 'Food, not a fix',
    body: 'AMUR sits alongside real meals, movement, and sleep. If something feels off, or you take medication, speak with your doctor.',
  },
];

const RULES = [
  { n: '01', strong: 'Before food.', rest: ' Nothing else in the way, nothing competing for absorption.' },
  {
    n: '02',
    strong: 'Never in something hot.',
    rest: ' Heat costs you the polyphenols you paid for.',
  },
  { n: '03', strong: 'Cool, dark, closed.', rest: ' Light and air are the only real enemies of good oil.' },
  { n: '04', strong: 'Same time, every day.', rest: ' The hour matters less than the repetition.' },
];

/** Cumulative [from, to) second bounds for each ritual step. */
const BOUNDS = RITUAL_STEPS.reduce<{ from: number; to: number }[]>((acc, step) => {
  const from = acc.length ? acc[acc.length - 1].to : 0;
  acc.push({ from, to: from + step.dur });
  return acc;
}, []);

const pad = (n: number) => String(n).padStart(2, '0');

const clockStr = (minutes: number) => {
  const m = ((Math.round(minutes) % 1440) + 1440) % 1440;
  return `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
};

export default function Ritual() {
  const [playing, setPlaying] = useState(false);
  const [wakeTime, setWakeTime] = useState('07:00');
  const [now, setNow] = useState(0);
  // Anchor the current playthrough. Ticking wall-clock time off this point keeps the
  // player accurate even if frames are dropped; `seq` restarts the timer on every seek,
  // including a seek back to the second the timer is already anchored at.
  const [anchor, setAnchor] = useState({ at: 0, seq: 0 });

  const seek = (at: number) => setAnchor((current) => ({ at, seq: current.seq + 1 }));

  useEffect(() => {
    if (!playing) return;
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      const elapsed = anchor.at + (Date.now() - startedAt) / 1000;
      if (elapsed >= RITUAL_TOTAL) {
        setNow(RITUAL_TOTAL);
        setPlaying(false);
      } else {
        setNow(elapsed);
      }
    }, 100);
    return () => window.clearInterval(timer);
  }, [playing, anchor]);

  const complete = now >= RITUAL_TOTAL;

  const toggle = () => {
    if (playing) {
      seek(now);
      setPlaying(false);
      return;
    }
    const from = complete ? 0 : now;
    setNow(from);
    seek(from);
    setPlaying(true);
  };

  const reset = () => {
    setPlaying(false);
    setNow(0);
    seek(0);
  };

  const jump = (index: number) => {
    setNow(BOUNDS[index].from);
    seek(BOUNDS[index].from);
  };

  let activeIdx = BOUNDS.findIndex((bound) => now >= bound.from && now < bound.to);
  if (activeIdx < 0) activeIdx = complete ? RITUAL_STEPS.length - 1 : 0;

  const remaining = Math.max(0, Math.ceil(RITUAL_TOTAL - now));
  const wake = (() => {
    const [h, m] = wakeTime.split(':');
    return (parseInt(h, 10) || 0) * 60 + (parseInt(m, 10) || 0);
  })();

  return (
    <main>
      {/* HERO */}
      <section className="ritual-hero">
        <div className="wrap">
          <div className="ritual-hero__meta">
            <span className="ritual-hero__kicker">The Ritual</span>
            <span className="ritual-hero__spec">25 ml &nbsp;/&nbsp; 60 seconds &nbsp;/&nbsp; once daily</span>
          </div>
          <div className="ritual-hero__grid">
            <h1 className="ritual-hero__title">
              Sixty
              <br />
              seconds,
              <br />
              <em className="ritual-hero__accent">kept.</em>
            </h1>
            <div>
              <p className="ritual-hero__lede">
                A ritual is only as good as your ability to repeat it. So we built the smallest
                possible one — and made it worth returning to.
              </p>
              <div className="ritual-hero__stats">
                {['Effort', 'Prep', 'Excuses'].map((label) => (
                  <div className="ritual-hero__stat" key={label}>
                    <div className="ritual-hero__stat-label">{label}</div>
                    <div className="ritual-hero__stat-value">None</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee__track">
          {[0, 1, 2].map((copy) => (
            <span className="marquee__group" key={copy} aria-hidden={copy > 0}>
              {MARQUEE.map((word) => (
                <span key={word} className="marquee__pair">
                  <span>{word}</span>
                  <span>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* PLAYER */}
      <section className="player">
        <div className="wrap">
          <div className="player__head">
            <div>
              <h2 className="player__title">Run it with me</h2>
              <p className="player__sub">Press play and follow along. This is the whole thing.</p>
            </div>
            <div className="player__controls">
              <span className="player__clock">
                {pad(Math.floor(remaining / 60))}:{pad(remaining % 60)}
              </span>
              <button
                type="button"
                className="player__play"
                onClick={toggle}
                aria-label="Play or pause the ritual"
              >
                {playing ? 'Pause' : complete ? 'Again' : 'Play'}
              </button>
              <button type="button" className="player__reset" onClick={reset}>
                Reset
              </button>
            </div>
          </div>

          <div className="player__track">
            <div className="player__bar" style={{ width: `${(now / RITUAL_TOTAL) * 100}%` }} />
          </div>

          <div className="player__steps">
            {RITUAL_STEPS.map((step, index) => {
              const active = index === activeIdx && (now > 0 || playing);
              const done = now >= BOUNDS[index].to;
              return (
                <button
                  type="button"
                  key={step.n}
                  className={`player__step${active ? ' is-active' : done ? ' is-done' : ''}`}
                  onClick={() => jump(index)}
                >
                  <div className="player__step-meta">
                    <span>{step.n}</span>
                    <span>{step.dur}s</span>
                  </div>
                  <h3 className="player__step-title">{step.label}</h3>
                  <p className="player__step-copy">{step.copy}</p>
                </button>
              );
            })}
          </div>

          <p className="player__now">
            Now — {RITUAL_STEPS[activeIdx].label}
            {playing ? '' : complete ? ' — complete' : ' — paused'}
          </p>
        </div>
      </section>

      {/* SCHEDULER */}
      <section className="scheduler">
        <div className="wrap scheduler__grid">
          <div>
            <div className="scheduler__kicker">Place it in your day</div>
            <h2 className="scheduler__title">
              Tell us when you <em>wake.</em>
            </h2>
            <p className="scheduler__lede">
              We’ll build the morning around it. The shot goes first, on an empty stomach, before
              anything competes for it.
            </p>
            <label className="scheduler__label" htmlFor="wake-time">
              Wake time
            </label>
            <input
              id="wake-time"
              type="time"
              value={wakeTime}
              onChange={(event) => setWakeTime(event.target.value)}
              className="scheduler__input"
            />
          </div>
          <div className="scheduler__list">
            {MORNING_SCHEDULE.map((entry) => (
              <div
                className={`scheduler__row${entry.hero ? ' is-hero' : ''}`}
                key={entry.title}
              >
                <span className="scheduler__time">{clockStr(wake + entry.offset)}</span>
                <div className="scheduler__body">
                  <h4 className="scheduler__row-title">{entry.title}</h4>
                  <p className="scheduler__note">{entry.note}</p>
                </div>
                <span className="scheduler__tag">{entry.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEEK BY WEEK */}
      <section className="weeks">
        <div className="wrap">
          <div className="weeks__head">
            <h2 className="weeks__title">What actually happens</h2>
            <span className="weeks__note">No promises, just honesty</span>
          </div>
          <div className="weeks__grid">
            {WEEKS.map((week) => (
              <div className={`weeks__cell${week.lead ? ' is-lead' : ''}`} key={week.when}>
                <div className="weeks__when">{week.when}</div>
                <h3 className="weeks__cell-title">{week.title}</h3>
                <p className="weeks__cell-body">{week.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIET RULES */}
      <section className="rules">
        <div className="wrap rules__grid">
          <div className="rules__panel">
            <h2 className="rules__title">Four quiet rules</h2>
            <div className="rules__list">
              {RULES.map((rule) => (
                <div className="rules__item" key={rule.n}>
                  <span className="rules__n">{rule.n}</span>
                  <p className="rules__copy">
                    <strong>{rule.strong}</strong>
                    {rule.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rules__media media" />
        </div>
      </section>

      {/* CTA */}
      <section className="ritual-cta">
        <div className="ritual-cta__inner">
          <h2 className="ritual-cta__title">
            Start tomorrow <em className="ritual-hero__accent">morning.</em>
          </h2>
          <p className="ritual-cta__lede">Thirty bottles. Thirty mornings. One minute each.</p>
          <div className="ritual-cta__actions">
            <Link to="/shop" className="btn btn--accent">
              Shop the ritual
            </Link>
            <Link to="/wellness" className="btn btn--ghost-light">
              Read the evidence
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
