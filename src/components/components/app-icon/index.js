import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import cleanComponentProps from 'tuxedo/utils/cleanComponentProps';
import Img from 'tuxedo/components/components/img';
import Box from 'tuxedo/components/atoms/box';

const VARIANTS = {
  default: {
    borderRadius: 1
  }
};

const StyledAppIcon = cleanComponentProps(Box, ['variant', 'clickable'])`
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${props => {
    const variantProps = VARIANTS[props.variant] || VARIANTS.default;
    return `
      border-radius: ${themeGet(`radii.${variantProps.borderRadius}`)(props)}px;
    `;
  }}
  cursor: ${props => (props.clickable ? 'pointer' : 'default')}
`;

/** Component to create an square app icon */
const AppIcon = props => {
  const { width = '16px', src, altIcon, ...restProps } = props;

  return (
    <StyledAppIcon width={width} height={width} {...restProps}>
      <Img src={src} altIcon={altIcon} />
    </StyledAppIcon>
  );
};

AppIcon.propTypes = {
  /** sets width and height of the app icon  */
  width: PropTypes.any,
  /** Icon variant */
  variant: PropTypes.string,
  /** Image src */
  src: PropTypes.string,
  /** Image alt */
  altIcon: PropTypes.object
};

AppIcon.displayName = 'AppIcon';

export default AppIcon;
