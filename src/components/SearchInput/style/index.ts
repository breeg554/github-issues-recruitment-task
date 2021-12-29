import styled from "styled-components";

export const StyledSearchInput = styled.input`
  width: 242px;
  padding: 8px 17px;
  background-color: transparent;
  border: 1px solid #d0d7de;
  border-radius: 5px;

  &,
  &::placeholder {
    color: #d0d7de;
    font-size: 16px;
    font-weight: 500;
  }

  &:focus {
    background-color: #fff;
    &,
    &::placeholder {
      color: ${({ theme }) => theme.colors.core.tertiary};
    }
  }
`;
