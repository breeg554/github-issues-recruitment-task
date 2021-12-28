import { useGetRepos, useGetUsers } from ".";

export const useReposAndUsers = () => {
  const userQuery = useGetUsers("");
  const reposQuery = useGetRepos("");

  return [reposQuery, userQuery];
};
