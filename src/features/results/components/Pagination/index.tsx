import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";
import { StyledPagination } from "./style";

interface PaginationProps {
  hasNext: boolean;
  hasPrevious: boolean;
}

export const Pagination = ({ hasNext, hasPrevious }: PaginationProps) => {
  return (
    <StyledPagination hasNext={hasNext} hasPrevious={hasPrevious}>
      <button disabled={!hasPrevious}>
        <ChevronLeftIcon size={16} /> Previous
      </button>
      <button disabled={!hasNext}>
        Next
        <ChevronRightIcon size={16} />
      </button>
    </StyledPagination>
  );
};
