export const truncateString = (n: number) => (str: string) => {
  if (str.length <= n) return str;
  return str.slice(0, n) + "...";
};
export const truncateRepoDescription = truncateString(135);
