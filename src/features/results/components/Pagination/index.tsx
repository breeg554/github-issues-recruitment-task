import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";
import { useMemo } from "react";
import { FetchMoreCursors, MergedPageInfo } from "../../types";
import { StyledPagination } from "./style";
import { PAGE_SIZE } from "../../routes";
interface PaginationProps {
  handleFetch: (pageInfo: FetchMoreCursors) => void;
  pageInfo: MergedPageInfo;
}

export const Pagination = ({ handleFetch, pageInfo }: PaginationProps) => {
  const hasNext = useMemo(
    () => pageInfo.users.hasNextPage || pageInfo.repositories.hasNextPage,
    [pageInfo]
  );
  const hasPrevious = useMemo(
    () => pageInfo.users.hasPreviousPage || pageInfo.repositories.hasPreviousPage,
    [pageInfo]
  );

  const fetchPrev = () => {
    handleFetch({
      userStartCursor: pageInfo.users.startCursor || undefined,
      repoStartCursor: pageInfo.repositories.startCursor || undefined,
      last: PAGE_SIZE,
      first: undefined,
    });
  };

  const fetchNext = () => {
    handleFetch({
      userEndCursor: pageInfo.users.endCursor || undefined,
      repoEndCursor: pageInfo.repositories.endCursor || undefined,
      first: PAGE_SIZE,
      last: undefined,
    });
  };

  return (
    <StyledPagination hasNext={hasNext} hasPrevious={hasPrevious}>
      <button disabled={!hasPrevious} onClick={fetchPrev}>
        <ChevronLeftIcon size={16} /> Previous
      </button>
      <button disabled={!hasNext} onClick={fetchNext}>
        Next
        <ChevronRightIcon size={16} />
      </button>
    </StyledPagination>
  );
};
