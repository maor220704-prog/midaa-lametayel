interface LoaderProps {
  /** Short status label shown above the animated pill. */
  label?: string;
  className?: string;
}

/**
 * Small animated pill-stretch loading indicator (recolored port of a
 * UIverse.io component by alexruix, onto this app's green tokens - see
 * `.loader` / `.loader-pill` in src/index.css).
 *
 * This app is fully static/offline and nothing currently awaits real async
 * work, so nothing wires this in today. It exists for the day a genuinely
 * async operation (e.g. a future network call) needs a loading state - use
 * it there rather than reaching for a spinner from scratch. The initial
 * page-boot loading state (before React mounts) is a separate, inline
 * implementation in index.html, since it must render before any JS runs.
 */
export default function Loader({ label = "טוען", className = "" }: LoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={`flex items-center justify-center ${className}`}
    >
      <div className="loader">
        <p className="loader-text">{label}</p>
        <span className="loader-pill" />
      </div>
    </div>
  );
}
