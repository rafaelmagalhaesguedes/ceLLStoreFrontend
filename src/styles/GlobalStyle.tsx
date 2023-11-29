import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Poppins , sans-serif;
    background-color: #F5F5F5;
  }
  
  a {
    text-decoration: none;
  }
`;
