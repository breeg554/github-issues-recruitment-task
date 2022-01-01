import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PageHeader } from "..";
import SearchProvider from "../../../context/Search";
import { theme } from "../../../styled/theme";

describe("Page header component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <Router>
        <ThemeProvider theme={theme}>
          <SearchProvider>
            <PageHeader />
          </SearchProvider>
        </ThemeProvider>
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
