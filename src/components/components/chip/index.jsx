import React, { Component } from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import cleanComponentProps from 'tuxedo/utils/cleanComponentProps';

import FlexBox from '../../atoms/flexbox';

const colorTypeMap = {
  primary: {
    bgColor: 'blue.0',
    color: 'blue'
  },
  secondary: {
    bgColor: 'grey.1',
    color: 'dark'
  },
  info: {
    bgColor: 'yellow.6',
    color: 'white'
  },
  success: {
    bgColor: 'green.0',
    color: 'green'
  },
  warning: {
    bgColor: 'yellow.0',
    color: 'yellow'
  },
  danger: {
    bgColor: 'red.0',
    color: 'red'
  }
};

const VARIANTS = {
  xs: {
    height: '12px',
    fontSize: 0
  },
  sm: {
    height: '16px',
    fontSize: 1
  }
};

const StyledChip = cleanComponentProps(FlexBox, [
  'clickable',
  'type',
  'variant',
  'bgColor',
  'color'
])`
  align-items: center;
  justify-content: center;
  padding: 0px ${themeGet('space.1')}px;
  border-radius: ${themeGet('radii.1')}px;
  display: inline-flex;
  font-weight: ${themeGet('fontWeights.semibold')};
  background-color: ${themeGet('colors.grey.1')};
  flex-shrink: 0;
  white-space: pre;

  ${props => {
    const variantConfig = VARIANTS[props.variant];
    return variantConfig
      ? `
      height: ${variantConfig.height};
    `
      : 'height : 16px';
  }}

  ${props => {
    if (props.clickable) {
      return 'cursor: pointer';
    }
    return '';
  }}

  ${props => {
    if (colorTypeMap[props.type]) {
      return `
        background-color: ${themeGet(
          `colors.${colorTypeMap[props.type].bgColor}`
        )(props)};
        color: ${themeGet(`colors.text.${colorTypeMap[props.type].color}`)(
          props
        )};
      `;
    } else {
      return '';
    }
  }}

  ${props => {
    if (props.bgColor) {
      return `
        background-color: ${themeGet(`${props.bgColor}`)(props)};
      `;
    } else {
      return '';
    }
  }}

  ${props => {
    if (props.color) {
      return `
        color: ${themeGet(`${props.color}`)(props)};
      `;
    } else {
      return '';
    }
  }}

  ${props => {
    const variantConfig = VARIANTS[props.variant];
    return variantConfig
      ? `
      font-size: ${themeGet(`fontSizes.${variantConfig.fontSize}`)(props)}px;
    `
      : '';
  }}
`;

export default StyledChip;
