import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Globals from '../globals';

const Provider = ({ children }) => {
  // Injecting globals here.
  Globals({ theme });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Provider.propTypes = {
  children: PropTypes.any
};

export default Provider;
