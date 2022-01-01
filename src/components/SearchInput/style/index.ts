import styled from "styled-components";

export const StyledSearchWrapper = styled.div`
  position: relative;
  .reset-search {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
  &:hover .reset-search {
    opacity: 1;
  }
  &:hover .search-input {
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.core.secondary};
    &,
    &::placeholder {
      color: ${({ theme }) => theme.colors.core.tertiary};
    }
  }
`;
export const StyledSearchInput = styled.input`
  width: 242px;
  padding: 8px 30px 8px 17px;
  background-color: transparent;
  border: 1px solid #d0d7de;
  border-radius: 5px;
  outline: none;
  transition: 0.1s ease-in-out;
  &,
  &::placeholder {
    color: #d0d7de;
    font-size: 16px;
    font-weight: 500;
  }
`;
