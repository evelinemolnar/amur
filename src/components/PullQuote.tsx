import './PullQuote.css';

interface PullQuoteProps {
  children: React.ReactNode;
  coral?: boolean;
  mark?: boolean;
}

export default function PullQuote({ children, coral, mark }: PullQuoteProps) {
  return (
    <div className={['pull', coral ? 'pull--coral' : ''].filter(Boolean).join(' ')}>
      {mark && <span className="pull__mark">"</span>}
      <blockquote>{children}</blockquote>
    </div>
  );
}
