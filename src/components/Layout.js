import PropTypes from 'prop-types';
import React from 'react';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
//* Local imports
import { Helmet } from 'react-helmet';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/theme';
import Nav from './Nav';
import Footer from './Footer';

// ? https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, alt }) => {
  const i = true;
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/ltj6ded.css" />
        </Helmet>
        <GlobalStyles />
        <Nav alt={alt} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  alt: PropTypes.any,
};

export default Layout;
