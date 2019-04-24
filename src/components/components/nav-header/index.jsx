import React, { Fragment } from 'react';
import { themeGet } from 'styled-system';
import system from 'system-components';

const NavHeader = system(
  {
    is: 'header'
  },

  props => {
    return {
      backgroundColor: themeGet('colors.black.7')(props),
      display: 'flex',
      alignItems: 'center',
      flexFlow: 'nowrap',

      position: 'relative',
      zIndex: 1000,
      minHeight: 0,
      borderRadius: 0,
      border: 'none',
      marginBottom: 0,
      padding: 0,

      '&:before, &:before': {
        content: ' ',
        display: 'table'
      }
    };
  },

  'height'
);

export default NavHeader;
