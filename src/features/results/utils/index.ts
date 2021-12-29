import { QueryResult } from "@apollo/client";
import { RepoAndUserArray } from "../types";

export const mergeSearchQueries = (queries: QueryResult[]) => {
  const data: any[] = queries.reduce((arr, curr) => {
    if (!curr.data || !curr.data.search) return arr;
    return arr.concat(curr.data.search.nodes);
  }, []);

  const dataCount = queries.reduce((val, curr) => {
    if (!curr.data || !curr.data.search) return val;
    return (val += curr.data.search.dataCount);
  }, 0);

  return { data, dataCount };
};
export const removeItemsWithoutId = (data: RepoAndUserArray) => {
  return [...data].filter((el) => el.id);
};
export const sortSearchQueriesById = (data: RepoAndUserArray) => {
  return [...data].sort((a, b) => a.id.localeCompare(b.id));
};
