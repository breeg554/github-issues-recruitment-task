export const truncateString = (n: number) => (str: string) => {
  if (str.length <= n) return str;
  return str.slice(0, n) + "...";
};
export const truncateRepoDescription = truncateString(135);

export const formatNumberBySeparator = (separator: string) => (n: number) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const formatNumberByComma = formatNumberBySeparator(",");
