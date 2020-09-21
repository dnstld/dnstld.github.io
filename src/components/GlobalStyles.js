import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: var(--color-body);
    color: var(--color-text);
    font-weight: 400;
  }
`;

export default GlobalStyles;
