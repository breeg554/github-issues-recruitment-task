import { Skeleton } from "../../../../components";
import { StyledProfileSkeleton } from "./style";

export const ProfileSkeleton = () => {
  return (
    <StyledProfileSkeleton>
      <Skeleton circle width="296px" height="296px" />
      <Skeleton height="25px" width="200px" />
      <Skeleton height="20px" width="100px" />
      <div className="side-wrapper">
        <Skeleton height="17px" width="60px" />
        <Skeleton height="17px" width="60px" />
        <Skeleton height="17px" width="60px" />
      </div>
    </StyledProfileSkeleton>
  );
};
