import {
  hasId,
  ModifyRepository,
  ModifyUser,
  Repository,
  User,
  MergedPageInfo,
  PageInfo,
} from "../types";

export const mergeSearchResults = (allData: {
  [name: string]: { dataCount: number; edges: any; pageInfo: PageInfo };
}) => {
  if (!allData) return undefined;

  const initData = {
    dataCount: 0,
    data: [] as (Repository | User)[],
    pageInfo: {
      users: allData["users"].pageInfo,
      repositories: allData["repositories"].pageInfo,
    } as MergedPageInfo,
  };

  return Object.keys(allData).reduce((tmp, key) => {
    tmp.dataCount += allData[key].dataCount;
    tmp.data = [...tmp.data, ...allData[key].edges.map((el: { node: any }) => el.node)];

    return tmp;
  }, initData);
};
export const removeItemsWithoutId = (data: (Repository | User)[]) => {
  const filtered: (ModifyRepository | ModifyUser)[] = [...data].filter(hasId);
  return filtered;
};
export const sortSearchQueriesById = (data: (ModifyRepository | ModifyUser)[]) => {
  return [...data].sort((a, b) => a.id.localeCompare(b.id));
};
