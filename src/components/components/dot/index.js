import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const VARIANTS = {
  default: {
    size: 16
  },
  sm: {
    size: 8
  },
  md: {
    size: 24
  }
};
const DEFAULT_COLOR = 'green';
const DEFAULT_VARIANT = 'default';

const StyledDot = styled.span`
  display: inline-block;
  position: relative;
  ${props => {
    const variantConf = VARIANTS[props.variant];
    return `
      height: ${variantConf.size}px;
      width: ${variantConf.size}px;
      :before {
        content: '';
        height: ${variantConf.size / 2}px;
        width: ${variantConf.size / 2}px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: ${themeGet('radii.3')(props)}%;
        background: ${
          !props.overrideColorFromTheme
            ? themeGet(`colors.${props.color}.6`)(props)
            : props.color
        };
      }
    `;
  }}
`;

/**
 * Cicular dots
 */
function Dot({
  color = DEFAULT_COLOR,
  variant = DEFAULT_VARIANT,
  overrideColorFromTheme
}) {
  return (
    <StyledDot
      variant={variant}
      color={color}
      overrideColorFromTheme={overrideColorFromTheme}
    />
  );
}
Dot.defaultProps = {
  color: DEFAULT_COLOR,
  variant: DEFAULT_VARIANT,
  overrideColorFromTheme: false
};

Dot.propTypes = {
  /**
   * color of the dot
   */
  color: PropTypes.string,
  /**
   * vaiant supports size
   */
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
  /**
   * override if the color has to be statically provided and hence should not be derived from the theme
   */
  overrideColorFromTheme: PropTypes.bool
};

Dot.displayName = 'Dot';

export default Dot;
