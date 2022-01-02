import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled/theme";
import { SearchInput } from "..";
describe("Search input component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <SearchInput value="abc" onChange={() => null} />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
