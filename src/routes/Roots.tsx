import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';
import OliveBranch from '../components/OliveBranch';
import PullQuote from '../components/PullQuote';
import './Roots.css';


export default function Roots() {
  return (
    <div className="roots">
      <Nav activePage="Roots" />

      {/* Hero */}
      <section className="roots-hero">
        <Eyebrow label="AMUR · Roots" center />
        <h1>Some things are more significant than what they <em>contain</em>.</h1>
        <div className="roots-hero__rule" />
        <figure className="roots-hero__figure">
          <img src="/images/hero.png" alt="" className="roots-hero__img" />
        </figure>
      </section>

      {/* I — Where we come from */}
      <section className="roots-read">
        <Eyebrow label="I · Where we come from" center />
        <h2>Built by people who never lost sight of where they <em>started</em>.</h2>
        <p>
          AMUR was built by people who grew up across the world but came back, again and again, to the same questions: where does this come from, and do the people behind it stand behind it. We asked those questions of our oil. We ask them of the companies we choose to associate our name with.
        </p>
        <p>
          Every bottle of AMUR carries a piece of two commitments we made before the first pressing: to education, and to health. Not as a campaign. As a condition of being in business.
        </p>
      </section>

      <PullQuote mark>
        Romanian by origin.<br />Global by choice.
      </PullQuote>

      {/* II — For the children */}
      <section className="roots-split">
        <div className="roots-split__body">
          <Eyebrow label="II · For the children" />
          <h2>A chance requires more than <em>will</em>.</h2>
          <p>
            In Romania, roughly one in five children does not finish primary school. Not for lack of ability. For lack of a teacher who stays, a classroom that holds, a system that reaches far enough into the countryside to find them.
          </p>
          <p>
            The problem is structural. The answer has to be structural too — recruiting people who would otherwise not enter teaching, training them, and placing them in the schools that need them most, in the regions that have the least.
          </p>
          <p>
            That is what Teach for Romania does. We have supported their work since we began.
          </p>
          <div className="roots-partner">
            <span className="roots-partner__label">In partnership with</span>
            <span className="roots-partner__name">Teach for Romania</span>
            <p className="roots-partner__desc">Recruiting, training and supporting teachers in under-resourced schools across Romania since 2013.</p>
          </div>
        </div>
        <div className="roots-split__media">
          <img src="/images/classroom.png" alt="" className="roots-split__img" />
        </div>
      </section>

      <PullQuote coral>
        They are already trying.<br />They simply need someone in their corner.
      </PullQuote>

      {/* III — For health */}
      <section className="roots-split roots-split--flip">
        <div className="roots-split__body">
          <Eyebrow label="III · For health" />
          <h2>Healthcare that treats them with <em>dignity</em>.</h2>
          <p>
            In parts of Romania, the nearest hospital is two hours away. The equipment, when it arrives, is outdated by the time it is installed. The people who work in these hospitals do so despite the conditions, not because of them.
          </p>
          <p>
            Dăruiește Viață builds and equips medical infrastructure at a pace and standard that the public system cannot match. They have completed hospitals that were shells for twenty years. They will continue.
          </p>
          <p>
            We contribute a portion of every bottle sold. Not the margins — the revenue.
          </p>
          <div className="roots-partner">
            <span className="roots-partner__label">In partnership with</span>
            <span className="roots-partner__name">Dăruiește Viață</span>
            <p className="roots-partner__desc">Building and equipping medical infrastructure across Romania through citizen-funded construction since 2016.</p>
          </div>
        </div>
        <div className="roots-split__media">
          <img src="/images/hospital.png" alt="" className="roots-split__img" />
        </div>
      </section>

      <PullQuote>
        Not in time. <em>Now.</em>
      </PullQuote>

      {/* IV — Your part */}
      <section className="roots-read">
        <Eyebrow label="IV · Your part in this" center />
        <h2>You are part of those <em>moments</em>.</h2>
        <p>
          We want to be honest with you: this is not a charity. It is a business that has chosen to be accountable for more than its margins. We sell olive oil. We sell it because we believe it is the best we can source and press. And because every bottle funds something that would not otherwise get funded.
        </p>
        <p>
          These are not children as a campaign. They are children in specific classrooms, in specific villages, in a country where the difference between a good teacher and no teacher is the difference between a future and its absence.
        </p>
        <p>
          When you pour AMUR, you are not performing generosity. You are buying olive oil, and the olive oil happens to carry a commitment that we made before you ever heard of us.
        </p>
      </section>

      <figure className="roots-closing-figure">
        <img src="/images/closing.png" alt="" className="roots-closing__img" />
      </figure>

      <PullQuote mark>
        Quietly. Consistently.<br />With every bottle.
      </PullQuote>

      {/* V — Commitment */}
      <section className="roots-commit">
        <div className="roots-commit__inner">
          <h2>We do not associate our name with anything we cannot <em>stand behind</em>.</h2>
          <p>
            Before we commit to a partnership, we spend time with the organisation — not as due diligence theatre, but because we want to understand what they actually do, and whether the people doing it are doing it for the right reasons.
          </p>
          <p>
            Both Teach for Romania and Dăruiește Viață have passed that test. Not once, but every year since we began.
          </p>
          <p>
            We publish our contribution amounts annually. We do not round up, we do not hide in percentages. You will be able to see, to the euro, what each bottle of AMUR contributes.
          </p>
          <p>
            We are not interested in the optics of giving. We are interested in what actually gets built.
          </p>
          <div className="roots-partners-2">
            <div className="roots-partner-card">
              <span className="roots-partner-card__type">Education</span>
              <span className="roots-partner-card__name">Teach for Romania</span>
              <p className="roots-partner-card__desc">Recruiting, training and supporting teachers in the schools that need them most across Romania.</p>
            </div>
            <div className="roots-partner-card">
              <span className="roots-partner-card__type">Health</span>
              <span className="roots-partner-card__name">Dăruiește Viață</span>
              <p className="roots-partner-card__desc">Building and equipping hospitals and medical infrastructure through citizen-funded construction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coda */}
      <section className="roots-coda">
        <div className="roots-coda__branch">
          <OliveBranch width={120} leaves={6} curve={8} style={{ color: 'var(--mustard)' }} />
        </div>
        <h2>Like our oil, we stand behind it <em>entirely</em>.</h2>
        <div className="roots-coda__buttons">
          <Button variant="primary" href="/waitlist">Join the waiting list</Button>
          <Button variant="ghost" href="/story">Read the story</Button>
        </div>
      </section>

      <Footer variant="full" />
    </div>
  );
}
