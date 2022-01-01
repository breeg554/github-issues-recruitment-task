import { render, screen } from "@testing-library/react";
import { RepoLanguages } from "../RepoLanguages";
import { fakeRepoLanguage } from "../testUtils";
describe("Repo language component", () => {
  it("renders out fake repo language data", () => {
    render(<RepoLanguages data={fakeRepoLanguage} />);

    expect(screen.getByText(fakeRepoLanguage.name)).toBeInTheDocument();
  });
});
