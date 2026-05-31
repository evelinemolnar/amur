import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
  variant: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ variant, href, onClick, children, className }: ButtonProps) {
  const cls = ['btn', `btn--${variant}`, className ?? ''].filter(Boolean).join(' ');
  if (href) {
    return <Link to={href} className={cls}>{children}</Link>;
  }
  return <button type="button" className={cls} onClick={onClick}>{children}</button>;
}
