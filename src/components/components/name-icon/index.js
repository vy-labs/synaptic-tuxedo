import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import hasValue from 'tuxedo/utils/hasValue';

import Box from '../../atoms/box';

const colors = {
  grey: 'grey.8',
  red: 'red.6',
  blue: 'blue.6',
  transparent: 'transparent'
};

const heights = {
  small: 2,
  medium: 3,
  large: 4,
  xLarge: 5,
  xxLarge: 6
};

const fontSizes = {
  small: 0,
  medium: 2,
  large: 3,
  xLarge: 4,
  xxLarge: 5
};

const NameIconContainer = styled.div`
  display: inline-flex;
  background-color: ${props =>
    themeGet(`colors.${colors[props.color]}`)(props)};
  border-radius: ${themeGet('radii.1')}px;
  height: ${props => themeGet(`heights.${heights[props.size]}`)(props)}px;
  line-height: ${props => themeGet(`heights.${heights[props.size]}`)(props)}px;
  width: ${props => themeGet(`heights.${heights[props.size]}`)(props)}px;
  align-items: center;
  justify-content: center;
`;

const Alphabet = styled.span`
  color: ${props => themeGet(`colors.text.${[props.textColor]}`)(props)};
  font-size: ${props =>
    themeGet(`fontSizes.${fontSizes[props.size]}`)(props)}px;
  text-transform: uppercase;
  font-weight: ${props => themeGet(`fontWeights.${[props.fontWeight]}`)(props)};
`;

/** component to create  icon from first name of a string */
const NameIcon = props => {
  const { name, type } = props;
  const alphabet = hasValue(name) ? name.charAt(0) : '?';
  let alphabetSecondary = null;
  if (type === 'multi') {
    alphabetSecondary = hasValue(name) ? name.charAt(1) : null;
  }

  return (
    <NameIconContainer {...props}>
      <Box>
        <Alphabet {...props}>{alphabet}</Alphabet>
      </Box>
      {alphabetSecondary && (
        <Box ml={1}>
          <Alphabet {...props}>{alphabetSecondary}</Alphabet>
        </Box>
      )}
    </NameIconContainer>
  );
};

NameIcon.propTypes = {
  /** name string */
  name: PropTypes.string,
  /** color of the background */
  color: PropTypes.oneOf(Object.keys(colors)),
  /** size of the drawn icon */
  size: PropTypes.oneOf(Object.keys(heights)),
  type: PropTypes.string,
  textColor: PropTypes.string,
  fontWeight: PropTypes.string
};

NameIcon.defaultProps = {
  color: 'grey',
  size: 'small',
  type: 'single',
  textColor: 'white',
  fontWeight: 'normal'
};

NameIcon.displayName = 'NameIcon';

export default NameIcon;
