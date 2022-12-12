import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    background: rgb(211,10,64);
    background: radial-gradient(circle, rgba(211,10,64,1) 0%, rgba(60,10,23,1) 100%);
  }
`;

export default GlobalStyle;
