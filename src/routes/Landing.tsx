import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import './Landing.css';

export default function Landing() {
  const [split, setSplit] = useState(50);
  const [dragging, setDragging] = useState(false);
  const navigate = useNavigate();
  const stageRef = useRef<HTMLDivElement>(null);

  const startDrag = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setDragging(true);
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const move = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const pct = Math.min(92, Math.max(8, (x / window.innerWidth) * 100));
      setSplit(pct);
    };

    const up = () => setDragging(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', up);

    if (dragging) document.body.style.cursor = 'col-resize';

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
      document.body.style.cursor = '';
    };
  }, [dragging]);

  const leftFade = split > 22 ? Math.min(1, (split - 22) / 20) : 0;
  const rightFade = split < 78 ? Math.min(1, (78 - split) / 20) : 0;

  return (
    <div className="landing" ref={stageRef}>
      <Nav light activePage="" />

      <div className="stage">
        {/* Tuscany — left scene */}
        <div
          className="scene scene--tuscany"
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
        >
          <div className="scene__inner">
            <video
              className="scene__video"
              src="/videos/tuscany.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="scene__vignette" />
          </div>
          <div className="scene__caption scene__caption--left" style={{ opacity: 1 - leftFade }}>
            <span className="scene__roman">I.</span>
            <span className="scene__desc">Cold-pressed</span>
            <span className="scene__loc">Toscana, IT</span>
          </div>
        </div>

        {/* Carbone — right scene */}
        <div
          className="scene scene--carbone"
          style={{ clipPath: `inset(0 0 0 ${split}%)` }}
        >
          <div className="scene__inner">
            <video
              className="scene__video"
              src="/videos/carbone.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="scene__vignette" />
          </div>
          <div className="scene__caption scene__caption--right" style={{ opacity: 1 - rightFade }}>
            <span className="scene__roman">II.</span>
            <span className="scene__desc">Finish — bold</span>
            <span className="scene__loc">Trattoria Cut</span>
          </div>
        </div>

        {/* Draggable divider */}
        <div
          className="divider"
          style={{ left: `${split}%` }}
          aria-hidden="true"
        >
          <div
            className={`divider__hit${dragging ? ' divider__hit--dragging' : ''}`}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
          >
            <p className="landing__hint">DRAG · TO CHOOSE YOUR SIDE</p>
            <div className="divider__handle">‹›</div>
          </div>
        </div>

        {/* Center UI */}
        <div className="landing__center">
          <button
            className="landing__discover"
            onClick={() => navigate('/story')}
            type="button"
          >
            DISCOVER <span className="landing__arrow">→</span>
          </button>
        </div>

        {/* Bottom bar */}
        <div className="landing__bar">
          <span>Est. MMXXVI · Single-Estate</span>
          <span style={{ marginLeft: 'auto' }}>Two worlds. One oil.</span>
        </div>
      </div>
    </div>
  );
}
