import { RepoAndUserArray } from "../types";

export const mergeSearchResults = (allData: any) => {
  if (!allData) return undefined;

  return Object.keys(allData).reduce(
    (tmp, key) => {
      tmp.dataCount += allData[key].dataCount;
      tmp.data = [...tmp.data, ...allData[key].edges.map((el: { node: any }) => el.node)];

      return tmp;
    },
    { dataCount: 0, data: [] as RepoAndUserArray }
  );
};
export const removeItemsWithoutId = (data: RepoAndUserArray) => {
  return [...data].filter((el) => el.id);
};
export const sortSearchQueriesById = (data: RepoAndUserArray) => {
  return [...data].sort((a, b) => a.id.localeCompare(b.id));
};

export const formatNumberBySeparator = (separator: string) => (n: number) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const formatNumberByComma = formatNumberBySeparator(",");
