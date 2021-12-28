import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "styled-components";
import { theme } from "../styled/theme";
import { GlobalStyle } from "../styled/global";
import { MainLayout } from "../components";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";

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
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
              <MainLayout>{children}</MainLayout>
            </Router>
          </ThemeProvider>
        </ApolloProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
