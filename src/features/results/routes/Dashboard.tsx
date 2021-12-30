import { useReposAndUsers } from "../api";
import { List, Pagination, ListSkeleton } from "../components";
import { formatNumberByComma } from "../utils";
import { ListResultNumber } from "./style";

export const Dashboard = () => {
  const { reposQuery, usersQuery, mergedData } = useReposAndUsers();

  if (usersQuery.loading || reposQuery.loading) return <ListSkeleton count={10} />;
  if (usersQuery.error) return <p>{usersQuery.error.message}</p>;
  if (reposQuery.error) return <p>{reposQuery.error.message}</p>;
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
