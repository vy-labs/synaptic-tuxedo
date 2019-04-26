import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import FontIcon from 'tuxedo/components/atoms/font-icon';

const StyledCloseIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${props => themeGet(`heights.${props.size}`)(props)}px;
  height: ${props => themeGet(`heights.${props.size}`)(props)}px;
  background: ${props =>
    props.backgroundColor
      ? themeGet(`colors.${props.backgroundColor}.2`)(props)
      : 'transparent'};
  border-radius: ${themeGet('radii.1')}px;
  cursor: pointer;

  &:hover {
    background: ${props =>
      props.backgroundColor
        ? themeGet(`colors.${props.backgroundColor}.3`)(props)
        : 'transparent'};
  }

  & > span > i > svg > g > use {
    fill: transparent;
  }

  & > span > i > svg > g > g {
    fill: ${props => themeGet(`colors.${props.color}.8`)(props)};
    transition: all ease-in 0.3s;
  }

  &:hover > span > i > svg > g > g {
    fill: ${props => themeGet(`colors.${props.hoverColor}.6`)(props)};
    opacity: 1;
  }
`;

function CloseIcon({
  onClick,
  size,
  color,
  hoverColor,
  backgroundColor,
  className
}) {
  return (
    <StyledCloseIcon
      className={className}
      onClick={onClick}
      size={size}
      color={color}
      hoverColor={hoverColor}
      backgroundColor={backgroundColor}
    >
      <FontIcon size={size} type='icon-Cross-lined' />
    </StyledCloseIcon>
  );
}

CloseIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

CloseIcon.defaultProps = {
  size: 2,
  color: 'grey',
  hoverColor: 'black',
  backgroundColor: '',
  className: ''
};

export default CloseIcon;
