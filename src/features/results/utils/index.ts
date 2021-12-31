import { hasId, ModifyRepository, ModifyUser, Repository, User } from "../types";

export const mergeSearchResults = (allData: {
  [name: string]: { dataCount: number; edges: any };
}) => {
  if (!allData) return undefined;

  return Object.keys(allData).reduce(
    (tmp, key) => {
      tmp.dataCount += allData[key].dataCount;
      tmp.data = [...tmp.data, ...allData[key].edges.map((el: { node: any }) => el.node)];

      return tmp;
    },
    { dataCount: 0, data: [] as (Repository | User)[] }
  );
};
export const removeItemsWithoutId = (data: (Repository | User)[]) => {
  const filtered: (ModifyRepository | ModifyUser)[] = [...data].filter(hasId);
  return filtered;
};
export const sortSearchQueriesById = (data: (ModifyRepository | ModifyUser)[]) => {
  return [...data].sort((a, b) => a.id.localeCompare(b.id));
};
