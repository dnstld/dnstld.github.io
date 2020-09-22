import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

import Home from './home';

const IndexPage = () => (
  <Layout>
    <Seo />

    <Home />
  </Layout>
);

export default IndexPage;
