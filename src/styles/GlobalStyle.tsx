import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Poppins , sans-serif;
    background: #F5F5F5;
  }
  
  a {
    text-decoration: none;
    color: #000;
  }

  a:visited {
    color: #000;
  }
  .empty {
    color: #ccc; /* or any other color that you want for empty stars */
  }
`;
