import React from 'react';

import { config } from '@fortawesome/fontawesome-svg-core';

import App from './src/components/App';

import '@fortawesome/fontawesome-svg-core/styles.css';

import './src/styles/main.css';

config.autoAddCss = false;

export const wrapRootElement = ({ element }) => <App>{element}</App>;

export default wrapRootElement;
