export function TextilePattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="guipil" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="#1A0F0C" />
          <path d="M20 2 L26 14 L38 20 L26 26 L20 38 L14 26 L2 20 L14 14 Z" fill="#7A1218" />
          <path d="M20 10 L23 17 L30 20 L23 23 L20 30 L17 23 L10 20 L17 17 Z" fill="#E8C547" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#guipil)" />
    </svg>
  );
}
