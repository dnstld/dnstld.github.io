import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

import Header from './Header';

const Layout = ({ children }) => (
  <Container>
    <Header />

    <Main>{children}</Main>
  </Container>
);

const Container = tw.div`
  h-screen grid grid-rows-layout
`;

const Main = tw.main`
  flex flex-wrap justify-center overflow-y-scroll max-w-screen-xl m-auto md:items-center
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
