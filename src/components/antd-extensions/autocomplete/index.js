import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';
import { themeGet } from 'styled-system';
import system from 'system-components';
import hoistNonReactStatics from 'hoist-non-react-statics';

const StyledAutoComplete = system(
  {
    is: AutoComplete
  },

  props => {
    return {
      '&:hover, &:hover input': {
        borderColor: `${themeGet('colors.border.hover')(props)} !important`
      },

      '&:focus, &:focus input': {
        borderColor: `${themeGet('colors.border.hover')(props)} !important`
      },

      '.ant-select-selection__placeholder': {
        fontWeight: themeGet('fontWeights.semibold')(props)
      }
    };
  },

  'width',
  'height'
);

StyledAutoComplete.displayName = 'AutoComplete';

/**
 * USE "hoistNonReactStatics" when extending Antd components
 * hoistNonReactStatics(Target, Source);
 * Copies all static props from 'Source' element to 'Target' element.
 */
export default hoistNonReactStatics(StyledAutoComplete, AutoComplete);
