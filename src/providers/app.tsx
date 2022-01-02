import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "styled-components";
import { theme } from "../lib/styled/theme";
import { GlobalStyle } from "../lib/styled/global";
import { ErrorMessage, MainLayout } from "../components";
import { client } from "../lib/apollo";
import SearchProvider from "../context/Search";

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
  if (!process.env.REACT_APP_API_URL || !process.env.REACT_APP_GITHUB_TOKEN)
    return (
      <ThemeProvider theme={theme}>
        <ErrorMessage
          msg="The .env file is missing or environment variables are not set! Take a look at the .env.example file and see how the .env file should look like."
          danger
        />
      </ThemeProvider>
    );
  return (
    <Suspense fallback={""}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ApolloProvider client={client}>
          <SearchProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Router>
                <MainLayout>{children}</MainLayout>
              </Router>
            </ThemeProvider>
          </SearchProvider>
        </ApolloProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
