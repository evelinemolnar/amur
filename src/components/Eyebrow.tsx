import './Eyebrow.css';

interface EyebrowProps {
  label: string;
  center?: boolean;
  className?: string;
}

export default function Eyebrow({ label, center, className }: EyebrowProps) {
  return (
    <p className={['eyebrow', center ? 'eyebrow--center' : '', className ?? ''].filter(Boolean).join(' ')}>
      {label}
    </p>
  );
}
