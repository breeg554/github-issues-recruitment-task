import React, { memo } from "react";
import { StyledSearchInput } from "./style";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = memo(({ value, onChange }: SearchInputProps) => {
  return (
    <StyledSearchInput
      placeholder="Search"
      value={value}
      onChange={onChange}
      aria-label="Search users and repositories"
    />
  );
});
