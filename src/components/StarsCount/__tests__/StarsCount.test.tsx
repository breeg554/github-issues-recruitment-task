import { render } from "@testing-library/react";
import { StarsCount } from "..";
describe("Stars count component", () => {
  it("renders and match the snapshot", () => {
    const { container } = render(<StarsCount count={12} />);

    expect(container).toMatchSnapshot();
  });
});
