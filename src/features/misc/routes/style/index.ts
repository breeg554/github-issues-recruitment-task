import styled from "styled-components";

export const StyledNotFound = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  h1 {
    font-size: 70px;
  }
  p:nth-of-type(1) {
    font-size: 20px;
  }
  p:nth-of-type(2) {
    font-size: 14px;
    margin-top: 12px;
  }
  a:hover {
    text-decoration: underline;
  }
`;
