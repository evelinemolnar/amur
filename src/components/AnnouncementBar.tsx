import { useEffect, useState } from 'react';
import { ANNOUNCEMENTS } from '../data/catalog';
import './AnnouncementBar.css';

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % ANNOUNCEMENTS.length),
      4200,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="announce">
      <span key={index} className="announce__msg">
        {ANNOUNCEMENTS[index]}
      </span>
    </div>
  );
}
