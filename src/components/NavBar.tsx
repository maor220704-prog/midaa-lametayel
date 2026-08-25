import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";

/**
 * Hidden on city detail pages: CityPage.tsx has its own top category tabs
 * that make the bottom bar redundant there (design.md section 5, note dated
 * 24/08/2026). Checking the route here - instead of not mounting NavBar in
 * App.tsx - keeps it always mounted, so it still survives page crashes.
 */
export default function NavBar() {
  const location = useLocation();
  if (location.pathname.startsWith("/city/")) return null;

  return (
    <nav
      className="nav-glass fixed inset-x-0 bottom-0 z-20"
      style={{
        // iOS Safari sometimes "detaches" a fixed element during momentum
        // scroll, letting it drift with the content instead of staying
        // pinned to the viewport - promoting it to its own GPU compositing
        // layer is the standard fix (reported by a real user on an iPhone).
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <span
        className="pointer-events-none absolute bottom-0.5 left-1.5 text-[9px] leading-none text-on-surface-variant/40"
        dir="ltr"
      >
        {__APP_VERSION__}
      </span>
      <div className="mx-auto flex h-16 w-full max-w-lg items-center justify-around px-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-0.5 rounded-full px-4 py-1 transition-colors ${
              isActive ? "bg-primary-container text-on-primary-container" : "text-on-surface-variant opacity-70"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Icon name="explore" filled={isActive} />
              <span className="text-xs font-medium">ערים</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/packing"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-0.5 rounded-full px-4 py-1 transition-colors ${
              isActive ? "bg-primary-container text-on-primary-container" : "text-on-surface-variant opacity-70"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Icon name="luggage" filled={isActive} />
              <span className="text-xs font-medium">ציוד</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/dictionary"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-0.5 rounded-full px-4 py-1 transition-colors ${
              isActive ? "bg-primary-container text-on-primary-container" : "text-on-surface-variant opacity-70"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Icon name="translate" filled={isActive} />
              <span className="text-xs font-medium">מילון</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
