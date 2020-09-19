import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: var(--color-body);
    color: var(--color-text);
    font-weight: 300;
  }
`;

export default GlobalStyles;