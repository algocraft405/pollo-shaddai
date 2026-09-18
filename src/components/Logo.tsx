export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-10 shrink-0"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="23" fill="#7A1218" />
        <circle cx="24" cy="24" r="18.5" fill="none" stroke="#E8C547" strokeWidth="1.4" />
        <path
          d="M15 28c2.2-7 7-12.5 14.5-14.2 1.6-.3 2.6 1.6 1.6 2.9-1.4 1.8-2 4-1.5 6.3 2.8-.4 5.3.7 7.2 2.8 1.4 1.6.3 4.2-1.8 4.4-3.3.3-6.2-.3-8.7-1.8-1.3 2.6-3.4 4.6-6.4 5.6-2.4.8-4.6-.9-4.9-3.2-.2-1.5.2-2.8 1-3.8z"
          fill="#F4E7C8"
        />
        <path
          d="M28.2 18.4c1.8 1.2 2.6 2.8 2.4 5"
          fill="none"
          stroke="#7A1218"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="31.6" cy="16.6" r="1.15" fill="#E8C547" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[1.15rem] font-semibold tracking-wide text-cream">
          Pollo Shaddai
        </span>
        <span className="mt-0.5 block text-[0.62rem] font-medium uppercase tracking-[0.22em] text-gold">
          Pollo frito chapín
        </span>
      </span>
    </span>
  );
}
