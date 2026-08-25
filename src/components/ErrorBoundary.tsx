import { Component, type ErrorInfo, type ReactNode } from "react";
import Icon from "./Icon";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 py-6 pb-24 text-center">
          <Icon name="error" className="text-5xl text-error" />
          <h1 className="text-2xl font-bold text-primary">משהו השתבש</h1>
          <p className="max-w-xs text-on-surface-variant">
            אירעה שגיאה בלתי צפויה. ניתן לנסות לחזור לדף הבית.
          </p>
          <button
            onClick={this.handleReload}
            className="mt-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-on-primary transition-colors active:scale-95"
          >
            חזרה לדף הבית
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
