import styled from "styled-components";

interface Props {
  hasNext: boolean;
  hasPrevious: boolean;
}

export const StyledPagination = styled.div<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  margin-top: 40px;
  button {
    background-color: transparent;
    border: 0;
    display: flex;
    gap: 9px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
  button:nth-of-type(1) {
    color: ${({ theme, hasPrevious }) =>
      hasPrevious ? theme.colors.core.secondary : "#8D959F"};
  }
  button:nth-of-type(2) {
    color: ${({ theme, hasNext }) => (hasNext ? theme.colors.core.secondary : "#8D959F")};
  }
  button:nth-of-type(1):hover {
    color: ${({ theme, hasPrevious }) =>
      hasPrevious ? theme.colors.hover.secondary : "#8D959F"};
  }
  button:nth-of-type(2):hover {
    color: ${({ theme, hasNext }) =>
      hasNext ? theme.colors.hover.secondary : "#8D959F"};
  }
`;
