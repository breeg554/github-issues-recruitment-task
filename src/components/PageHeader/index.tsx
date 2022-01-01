import { useSearch } from "../../context/Search";
import { SearchInput } from "..";
import { StyledPageHeader } from "./style";
import { MarkGithubIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";

export const PageHeader = () => {
  const { searchVal, handleSetSearch, handleClearSearch } = useSearch();
  return (
    <StyledPageHeader>
      <div>
        <Link to="/" className="github-logo" aria-label="Home page">
          <MarkGithubIcon />
        </Link>
        <SearchInput
          value={searchVal}
          onChange={handleSetSearch}
          onClear={handleClearSearch}
        />
      </div>
    </StyledPageHeader>
  );
};
