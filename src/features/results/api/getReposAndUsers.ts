import { useMemo } from "react";
import { useGetRepos, useGetUsers } from ".";
import { RepoAndUserArray } from "../types";
import { mergeSearchQueries, sortSearchQueriesById } from "../utils";

export const useReposAndUsers = () => {
  const usersQuery = useGetUsers("");
  const reposQuery = useGetRepos("");

  const mergedData = useMemo(() => {
    if (!reposQuery.data || !usersQuery.data) return; //wait for both queries

    const merged: {
      data: RepoAndUserArray;
      dataCount: number;
    } = mergeSearchQueries([reposQuery, usersQuery]);
    merged.data = sortSearchQueriesById(merged.data);

    return merged;
  }, [reposQuery, usersQuery]);

  return { reposQuery, usersQuery, mergedData };
};
