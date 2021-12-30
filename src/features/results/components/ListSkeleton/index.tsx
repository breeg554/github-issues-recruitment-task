import { useMemo } from "react";
import { Skeleton } from "../../../../components";
import { StyledSkeletonsList } from "./style";

interface ListSkeletonProps {
  count: number;
}

export const ListSkeleton = ({ count }: ListSkeletonProps) => {
  const array = useMemo(() => Array.from(Array(Math.abs(count)).keys()), [count]);

  return (
    <StyledSkeletonsList>
      {array.map((el, index) => (
        <div key={index}>
          <Skeleton circle width="25px" height="25px" />
          <div className="site-wrapper">
            <Skeleton height="25px" width="90%" />
            <Skeleton height="25px" width="80%" />
            <Skeleton height="25px" width="80%" />
            {/* <Skeleton height="25px" width="95%" /> */}
          </div>
        </div>
      ))}
    </StyledSkeletonsList>
  );
};
