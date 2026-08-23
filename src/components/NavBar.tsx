import { NavLink } from "react-router-dom";
import Icon from "./Icon";

export default function NavBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-outline-variant bg-surface-container-low">
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
