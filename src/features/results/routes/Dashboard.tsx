import useDebounce from "../../../hooks/useDebounce";
import { useSearch } from "../../../context/Search";
import { useReposAndUsers } from "../api";
import { List, Pagination, ListSkeleton } from "../components";
import { formatNumberByComma } from "../../../utils/transform";
import { ListResultNumber, StyledDashboard } from "./style";
import { ErrorMessage } from "../../../components";
import { FetchMoreCursors } from "../types";

export const PAGE_SIZE = 7;

export const Dashboard = () => {
  const { searchVal } = useSearch();
  const debouncedSearchTerm: string = useDebounce<string>(searchVal, 500);

  const { query, mergedData } = useReposAndUsers(debouncedSearchTerm, PAGE_SIZE);

  const handleFetchNextPrev = (pageInfo: FetchMoreCursors) => {
    query.fetchMore({
      variables: {
        search: debouncedSearchTerm,
        ...pageInfo,
      },
      updateQuery: (_prevResults, { fetchMoreResult }) => {
        return fetchMoreResult;
      },
    });
  };

  return (
    <StyledDashboard>
      {query.loading ? (
        <ListSkeleton count={10} />
      ) : query.error ? (
        <ErrorMessage msg={query.error.message} />
      ) : !mergedData || mergedData.data.length === 0 ? (
        <p style={{ fontSize: "16px" }}>No data</p>
      ) : (
        <>
          <ListResultNumber>
            {formatNumberByComma(mergedData.dataCount)}{" "}
            {mergedData.dataCount === 1 ? "result" : "results"}
          </ListResultNumber>
          <List data={mergedData} />
          <Pagination handleFetch={handleFetchNextPrev} pageInfo={mergedData.pageInfo} />
        </>
      )}
    </StyledDashboard>
  );
};
