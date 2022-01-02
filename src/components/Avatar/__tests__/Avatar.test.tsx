import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../lib/styled/theme";
import { Avatar } from "..";
describe("Avatar component", () => {
  it("renders out and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Avatar
          url={
            "https://avatars.githubusercontent.com/u/18537064?u=303ee637d927c207e8f036ebae4ff94abbb3af4e&v=4"
          }
          userLogin={"test"}
        />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders out the link version and match the snapshot", () => {
    const { container } = render(
      <Router>
        <ThemeProvider theme={theme}>
          <Avatar
            withLink
            width="50px"
            url={
              "https://avatars.githubusercontent.com/u/18537064?u=303ee637d927c207e8f036ebae4ff94abbb3af4e&v=4"
            }
            userLogin={"test"}
          />
        </ThemeProvider>
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
