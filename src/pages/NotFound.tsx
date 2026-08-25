import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 py-6 pb-24 text-center">
      <Icon name="map" className="text-5xl text-on-surface-variant" />
      <h1 className="text-2xl font-bold text-primary">הדף לא נמצא</h1>
      <p className="max-w-xs text-on-surface-variant">
        נראה שהקישור שגוי או שהדף הוזז. אפשר לחזור לרשימת הערים.
      </p>
      <Link
        to="/"
        className="mt-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-on-primary transition-colors active:scale-95"
      >
        חזרה לרשימת הערים
      </Link>
    </div>
  );
}
