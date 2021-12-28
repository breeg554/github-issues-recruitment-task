import { useReposAndUsers } from "../api";
import { isUser } from "../types";

export const Dashboard = () => {
  const { reposQuery, usersQuery, mergedData } = useReposAndUsers();

  console.log(mergedData);
  if (usersQuery.loading || reposQuery.loading) return <p>Loading...</p>;
  if (usersQuery.error) return <p>{usersQuery.error.message}</p>;
  if (reposQuery.error) return <p>{reposQuery.error.message}</p>;
  if (!mergedData || mergedData.data.length === 0) return <p>No data</p>;

  return (
    <div>
      <p>total dods: {mergedData.dataCount}</p>
      {mergedData.data.map((el) => (
        <p>{isUser(el) ? el.location : el.stargazerCount}</p>
      ))}
    </div>
  );
};
