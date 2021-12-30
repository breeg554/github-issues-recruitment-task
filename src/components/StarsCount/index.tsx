import { StarIcon } from "@primer/octicons-react";
import { memo } from "react";
import { StyledStarsCount } from "./style";

interface StarsCountProps {
  count: number;
}

export const StarsCount = memo(({ count }: StarsCountProps) => {
  return (
    <StyledStarsCount>
      <StarIcon size={14} />
      {count}
    </StyledStarsCount>
  );
});
