import { render } from "@testing-library/react";
import { Skeleton } from "..";
describe("Stars count component", () => {
  it("renders basic skeleton and match the snapshot", () => {
    const { container } = render(<Skeleton />);

    expect(container).toMatchSnapshot();
  });

  it("renders skeleton with custom props and match the snapshot", () => {
    const { container } = render(
      <Skeleton width="120px" height="50px" circle animate={false} />
    );

    expect(container).toMatchSnapshot();
  });
});
