import React from 'react';

import App from './src/components/App';

import './src/styles/main.css';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};