import { memo } from "react";
import { Language } from "../../types";
import { StyledRepoLanguages } from "./style";

interface RepoLanguagesProps {
  data: Language;
}

export const RepoLanguages = memo(({ data }: RepoLanguagesProps) => {
  return (
    <StyledRepoLanguages circleColor={data.color}>
      <span />
      {data.name}
    </StyledRepoLanguages>
  );
});
