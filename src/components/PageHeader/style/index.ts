import styled from "styled-components";

export const StyledPageHeader = styled.header`
  width: 100%;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.core.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
