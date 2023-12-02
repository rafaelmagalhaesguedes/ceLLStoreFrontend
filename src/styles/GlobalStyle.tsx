import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Poppins , sans-serif;
    background-color: #1e1e1e;
  }
  
  a {
    text-decoration: none;
  }

  .empty {
    color: #ccc; /* or any other color that you want for empty stars */
  }
`;
