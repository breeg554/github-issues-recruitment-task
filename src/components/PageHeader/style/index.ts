import styled from "styled-components";

export const StyledPageHeader = styled.header`
  width: 100%;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.core.primary};

  & > div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .github-logo {
    svg {
      width: 38px;
      height: 38px;
      color: #fff;
    }
    &:hover svg {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  ${({ theme }) => theme.mediaQ.lg} {
    padding: 17px 20px;
  }
`;
