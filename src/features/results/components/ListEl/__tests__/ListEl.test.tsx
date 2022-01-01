import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ListEl } from "..";
import { theme } from "../../../../../styled/theme";
import { fakeRepoData, fakeUserData } from "../testUtils";
describe("List element component", () => {
  it("renders out user data and match the snapshot", () => {
    const { container } = render(
      <Router>
        <ThemeProvider theme={theme}>
          <ListEl data={fakeUserData} />
        </ThemeProvider>
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
  it("renders out repository data and match the snapshot", () => {
    const { container } = render(
      <Router>
        <ThemeProvider theme={theme}>
          <ListEl data={fakeRepoData} />
        </ThemeProvider>
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
