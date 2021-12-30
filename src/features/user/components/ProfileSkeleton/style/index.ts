import styled from "styled-components";

export const StyledProfileSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  & > div:nth-of-type(2) {
    margin-top: 15px;
  }
  .side-wrapper {
    display: flex;
    gap: 6px;
  }
`;
