/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import tw from 'twin.macro';

import Header from './Header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
    </Container>
  );
};

const Container = tw.div`
  h-screen
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;