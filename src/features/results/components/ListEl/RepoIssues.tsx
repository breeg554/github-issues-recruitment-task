import { memo } from "react";

interface RepoIssuesProps {
  total: number;
}

export const RepoIssues = memo(({ total }: RepoIssuesProps) => {
  return (
    <span>
      {total} {total === 1 ? "issue" : "issues"} needs help
    </span>
  );
});
