import { ICON_PATHS } from "./iconPaths";

interface IconProps {
  name: string;
  filled?: boolean;
  className?: string;
}

/**
 * Renders one of a small, hand-picked set of inline SVG icons (see
 * iconPaths.ts) in place of the Material Symbols Outlined web font, so the
 * app needs no network access to show icons. The public API is unchanged
 * from the old font-ligature implementation: pass the same `name` strings
 * as before, plus optional `filled` and `className`.
 */
export default function Icon({ name, filled, className = "" }: IconProps) {
  const def = ICON_PATHS[name];

  if (!def) {
    if (import.meta.env.DEV) {
      console.warn(`Icon: unknown icon name "${name}"`);
    }
    return null;
  }

  const d = (filled && def.filledPath) || def.path;

  return (
    <svg
      viewBox={def.viewBox}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      className={`icon-svg ${className}`}
    >
      <path d={d} />
    </svg>
  );
}
