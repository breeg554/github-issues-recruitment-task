import { useMemo } from "react";
import { useGetRepos, useGetUsers } from ".";
import { useSearch } from "../../../context/Search";
import { RepoAndUserWithCount } from "../types";
import {
  mergeSearchQueries,
  removeItemsWithoutId,
  sortSearchQueriesById,
} from "../utils";

export const useReposAndUsers = () => {
  const { searchVal } = useSearch();
  const usersQuery = useGetUsers(searchVal);
  const reposQuery = useGetRepos(searchVal);

  const mergedData = useMemo(() => {
    if (!reposQuery.data || !usersQuery.data) return; //wait for both queries

    const merged: RepoAndUserWithCount = mergeSearchQueries([reposQuery, usersQuery]);
    merged.data = removeItemsWithoutId(merged.data);
    merged.data = sortSearchQueriesById(merged.data);

    return merged;
  }, [reposQuery, usersQuery]);

  return { reposQuery, usersQuery, mergedData };
};
