import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import system from 'system-components';
import styled from 'styled-components';

const StyledSpan = styled.span`
  display: inline-block;
  ${props => {
    return `
    font-size: ${themeGet(`iconSizes.${props.size}`)(props)}px;
    `;
  }};
  ${props => {
    return props.color
      ? `
      color: ${themeGet(`colors.fontIcon.${props.color}`)(props)};
    `
      : '';
  }};
`;

const FontIcon = ({ className = '', type, size, color, onClick }) => (
  <StyledSpan
    size={size}
    className={`${className} ${type}`}
    {...color && { color }}
    {...onClick && { onClick }}
  />
);

FontIcon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func
};

FontIcon.defaultProps = {
  size: 0
};

FontIcon.displayName = 'FontIcon';

export default FontIcon;
