import { render, screen } from "@testing-library/react";
import { RepoIssues } from "../RepoIssues";
describe.skip("Repo issues component", () => {
  it("renders out with 5 open issues", () => {
    render(<RepoIssues total={5} />);

    expect(screen.getByText("5 issues needs help")).toBeInTheDocument();
  });
  it("renders out with single open issue", () => {
    render(<RepoIssues total={1} />);

    expect(screen.getByText("1 issue needs help")).toBeInTheDocument();
  });
});
