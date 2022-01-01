import { XIcon } from "@primer/octicons-react";
import React, { memo } from "react";
import { StyledSearchInput, StyledSearchWrapper } from "./style";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}

export const SearchInput = memo(({ value, onChange, onClear }: SearchInputProps) => {
  return (
    <StyledSearchWrapper>
      <StyledSearchInput
        className="search-input"
        placeholder="Search"
        value={value}
        onChange={onChange}
        aria-label="Search users and repositories"
      />
      {onClear ? (
        <button className="reset-search" onClick={onClear}>
          <XIcon size={12} />
        </button>
      ) : null}
    </StyledSearchWrapper>
  );
});
