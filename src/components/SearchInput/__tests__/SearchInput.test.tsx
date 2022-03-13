import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled/theme";
import { SearchInput } from "..";
import userEvent from "@testing-library/user-event";
import SearchProvider, { SearchContext } from "../../../context/Search";
describe("Search input component", () => {
  // it("renders out and match the snapshot", () => {
  //   const { container } = render(
  //     <ThemeProvider theme={theme}>
  //       <SearchInput value="abc" onChange={() => null} />
  //     </ThemeProvider>
  //   );

  //   expect(container).toMatchSnapshot();
  // });
  it.only("typing at search box", () => {
    render(
      <ThemeProvider theme={theme}>
        <SearchContext.Consumer>
          {(value) => <SearchInput value={value.searchVal || ""} onChange={(e) => value.handleSetSearch(e)} />}
        </SearchContext.Consumer>
      </ThemeProvider>
    );
    const input = screen.getByPlaceholderText(/search/i);
    userEvent.type(screen.getByPlaceholderText(/search/i), "test");

    expect(screen.getByPlaceholderText(/search/i)).toHaveValue("test");
  });
});
