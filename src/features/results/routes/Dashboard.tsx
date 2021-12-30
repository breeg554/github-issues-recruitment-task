import { useSearch } from "../../../context/Search";
import { useReposAndUsers } from "../api";
import { List, Pagination, ListSkeleton } from "../components";
import { formatNumberByComma } from "../../../utils/transform";
import { ListResultNumber, StyledDashboard } from "./style";

export const Dashboard = () => {
  const { searchVal } = useSearch();
  const { query, mergedData } = useReposAndUsers(searchVal);

  return (
    <StyledDashboard>
      {query.loading ? (
        <ListSkeleton count={10} />
      ) : query.error ? (
        <p>{query.error.message}</p>
      ) : !mergedData || mergedData.data.length === 0 ? (
        <p>No data</p>
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
