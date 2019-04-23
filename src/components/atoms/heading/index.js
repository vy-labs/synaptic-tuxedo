import React, { Fragment } from 'react';
import { themeGet } from 'styled-system';
import PropTypes from 'prop-types';
import system from 'system-components';

const VARIANTS = {
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};

/**
 * Heading component
 */
const Heading = system(
  {
    is: 'div'
  },

  props => {
    const fontSize = VARIANTS[props.variant];
    return `
      display: inline-block;
      font-weight: ${themeGet('fontWeights.bold')(props)};
      font-size: ${themeGet(`fontSizes.${fontSize}`)(props)}px
    `;
  }
);

Heading.propTypes = {
  /** variant supports font-size */
  variant: PropTypes.oneOf(Object.keys(VARIANTS))
};

Heading.defaultProps = {
  variant: 'md'
};

Heading.displayName = 'Heading';

export default Heading;
