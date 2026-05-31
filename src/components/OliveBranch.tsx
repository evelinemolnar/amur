interface OliveBranchProps {
  width?: number;
  leaves?: number;
  curve?: number;
  fruit?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export default function OliveBranch({
  width = 200,
  leaves = 7,
  curve = 8,
  fruit = true,
  style,
  className,
}: OliveBranchProps) {
  const w = width;
  const h = Math.round(width * 0.4);
  const cx = w / 2;
  const cy = -curve;

  const leafElements: React.ReactNode[] = [];
  for (let i = 0; i < leaves; i++) {
    const t = (i + 1) / (leaves + 1);
    const x = (1 - t) * (1 - t) * 0 + 2 * (1 - t) * t * cx + t * t * w;
    const y = (1 - t) * (1 - t) * 0 + 2 * (1 - t) * t * cy + t * t * (-curve / 4);
    const angle = i % 2 === 0 ? 32 : -32;
    leafElements.push(
      <ellipse
        key={i}
        cx={x}
        cy={y}
        rx={14}
        ry={4.2}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        transform={`rotate(${angle}, ${x}, ${y})`}
      />
    );
  }

  const fruitElements: React.ReactNode[] = [];
  if (fruit) {
    const endX = w;
    const endY = -curve / 4;
    fruitElements.push(
      <circle key="f1" cx={endX - 6} cy={endY - 6} r={3.4} fill="currentColor" />,
      <circle key="f2" cx={endX + 2} cy={endY - 2} r={3.4} fill="currentColor" />
    );
  }

  const vbH = h + 20;
  return (
    <svg
      width={w}
      height={vbH}
      viewBox={`-14 ${-vbH / 2} ${w + 28} ${vbH}`}
      style={style}
      className={className}
      aria-hidden="true"
    >
      <path
        d={`M 0 0 Q ${cx} ${cy} ${w} ${-curve / 4}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
      />
      {leafElements}
      {fruitElements}
    </svg>
  );
}
