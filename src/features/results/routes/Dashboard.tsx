import { useReposAndUsers } from "../api";

export const Dashboard = () => {
  const [reposQuery, usersQuery] = useReposAndUsers();

  if (usersQuery.loading || reposQuery.loading) return <p>Loading...</p>;
  if (usersQuery.error) return <pre>{usersQuery.error.message}</pre>;
  if (reposQuery.error) return <pre>{reposQuery.error.message}</pre>;

  return <div>Dashboard</div>;
};
