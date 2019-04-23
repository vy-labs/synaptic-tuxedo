import React, { Fragment } from 'react';
import { Table } from 'antd';
import { themeGet } from 'styled-system';
import system from 'system-components';

/** Table derived from antd Table component */
const StyledTable = system(
  {
    is: Table
  },

  props => {
    return props.fixed ? {
      table : {
        tableLayout: 'fixed'
      }
    } : {};
  },

  props => {
    return {
      'thead > tr > th': {
        cursor: 'default',
        color: themeGet('colors.text.medium')(props),
        borderTop: `${themeGet('borders.1')(props)}px solid ${themeGet('colors.grey.2')(props)}`,
        borderBottom: `${themeGet('borders.1')(props)}px solid ${themeGet('colors.grey.2')(props)}`,
        padding: `${themeGet('space.2')(props)}px ${themeGet('space.4')(props)}px`,
        fontSize: `${themeGet('fontSizes.1')(props)}px`,
        textTransform: 'uppercase',

        '&.right': {
          textAlign: 'right'
        },

        '&.no-right-padding': {
          paddingRight: 0
        }
      }
    };
  },
  props => {
    return {
      'tbody > tr > td': {
        borderBottom: `${themeGet('borders.1')(props)}px solid ${themeGet('colors.grey.2')(props)}`,
        padding: `${themeGet('space.2')(props)}px ${themeGet('space.4')(props)}px`,

        '&.right': {
          textAlign: 'right'
        },

        '&.no-right-padding': {
          paddingRight: 0
        }
      },

      'tbody > tr:last-child > td': {
        borderBottom: 'none'
      }
    };
  },
  props => {
    return {
      'div.ant-table-placeholder': {
        borderBottom: 'none'
      }
    };
  },

  props => {
    return {
      'td.gradient, th.gradient': {
        width: '8px',
        padding: 0
      },

      'td.gradient-green, td.gradient-green:hover': {
        background: 'linear-gradient(to top, rgba(56, 217, 166, 0), #1ab16d) !important'
      },

      'td.gradient-red, td.gradient-red:hover': {
        background: 'linear-gradient(to top, #e97272, rgba(233, 114, 114, 0)) !important'
      }
    };
  }
);

StyledTable.displayName = 'Table';

export default StyledTable;
