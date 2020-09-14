import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: var(--color-body);
    color: var(--color-text);
  }
`;

export default GlobalStyles;