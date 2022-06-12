import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled/theme";
import { ErrorMessage } from "..";
describe("Error message component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ErrorMessage msg={"test"} />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
  it("renders out the danger version and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ErrorMessage msg={"test1"} danger />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
