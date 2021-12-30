import styled from "styled-components";

export const StyledProfile = styled.section`
  width: 100%;
  max-width: 948px;
  margin: 0 auto;
  padding: 45px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 16px;
    font-size: 26px;
  }
  .login {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.core.tertiary};
    line-height: 32px;
  }
  .social-wrapper {
    display: flex;
    align-items: center;
    gap: 19px;
    margin-top: 13px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.core.tertiary};
    font-weight: 500;
  }
`;
