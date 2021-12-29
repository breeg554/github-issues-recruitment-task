import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,button,input,textarea{
    font-family: 'Roboto', sans-serif;
    font-size: 10px;   //1rem = 10px
  }
  body{
    background-color: #E5E5E5;
  }
`;
