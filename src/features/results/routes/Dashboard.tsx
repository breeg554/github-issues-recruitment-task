import { useEffect } from "react";
import { useSearch } from "../../../context/Search";
import { useLazyReposAndUsers } from "../api";
import { List, Pagination, ListSkeleton } from "../components";
import { formatNumberByComma } from "../../../utils/transform";
import { ListResultNumber, StyledDashboard } from "./style";
import { ErrorMessage } from "../../../components";
import useDebounce from "../../../hooks/useDebounce";

export const Dashboard = () => {
  const { searchVal } = useSearch();
  const debouncedSearchTerm: string = useDebounce<string>(searchVal, 500);
  const { getData, query, mergedData } = useLazyReposAndUsers(debouncedSearchTerm);

  useEffect(() => {
    getData();
  }, [debouncedSearchTerm, getData]);

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
          <Pagination hasNext={true} hasPrevious={false} />
        </>
      )}
    </StyledDashboard>
  );
};
