import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from './ThemeContext';
import GlobalStyles from './GlobalStyles';

function App({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
