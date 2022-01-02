import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MainLayout } from "..";
import SearchProvider from "../../../context/Search";
import { theme } from "../../../lib/styled/theme";

describe("Main layout component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <Router>
        <ThemeProvider theme={theme}>
          <SearchProvider>
            <MainLayout>
              <p>HELLO WORLD</p>
            </MainLayout>
          </SearchProvider>
        </ThemeProvider>
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
