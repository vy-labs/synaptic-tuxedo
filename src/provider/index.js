import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Globals from 'tuxedo/globals';

const Provider = ({ children, theme: themeFromProps }) => {
  // Injecting globals here.
  const themeObj = themeFromProps || theme;
  Globals({ theme: themeObj });
  return <ThemeProvider theme={themeObj}>{children}</ThemeProvider>;
};

Provider.propTypes = {
  children: PropTypes.any
};

export default Provider;
