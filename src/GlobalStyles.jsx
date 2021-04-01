import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  html, body {
    height: 100%;
  }

  main {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background: #f8f9fe;
  }
`;