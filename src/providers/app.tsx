import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = () => {
  return (
    <div>
      <h2>Ups! Something went wrong!</h2>
      <button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </div>
  );
};

interface AppProviderProps {
  children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>{children}</Router>
      </ErrorBoundary>
    </Suspense>
  );
};
