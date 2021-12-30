import styled from "styled-components";

export const StyledSkeletonsList = styled.div`
  width: 100%;
  margin-top: 40px;
  & > div {
    width: 100%;
    display: flex;
    gap: 12px;
    margin-bottom: 25px;
    .site-wrapper {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`;
