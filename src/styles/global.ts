import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 60%;

    @media (min-width: 700px) {
      font-size: 62.5%;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    line-height: 3.8rem;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 600;
  }

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  noscript {
    font-size: ${({ theme }) => theme.font.sizes.large};
    z-index: 100;
    margin-bottom: ${({ theme }) => theme.spacings.large};
    font-weight: bold;
  }

  #__next {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
