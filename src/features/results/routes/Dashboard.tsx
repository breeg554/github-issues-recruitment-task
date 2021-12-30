import { useSearch } from "../../../context/Search";
import { useReposAndUsers } from "../api";
import { List, Pagination, ListSkeleton } from "../components";
import { formatNumberByComma } from "../utils";
import { ListResultNumber } from "./style";

export const Dashboard = () => {
  const { searchVal } = useSearch();
  const { query, mergedData } = useReposAndUsers(searchVal);

  if (query.loading) return <ListSkeleton count={10} />;
  if (query.error) return <p>{query.error.message}</p>;
  if (!mergedData || mergedData.data.length === 0) return <p>No data</p>;

  return (
    <section>
      <ListResultNumber>
        {formatNumberByComma(mergedData.dataCount)}{" "}
        {mergedData.dataCount === 1 ? "result" : "results"}
      </ListResultNumber>
      <List data={mergedData} />
      <Pagination hasNext={true} hasPrevious={false} />
    </section>
  );
};
