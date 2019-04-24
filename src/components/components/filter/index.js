import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';

import Box from '../../atoms/box';
import FlexBox from '../../atoms/flexbox';

/** STYLED COMPONENTS START */
/**
  border-bottom: ${themeGet('borders.1')}px solid;
  border-color: ${themeGet('colors.border.default')};
 */
const SPACING = 2;
const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFilterHeader = styled.div`
  font-weight: ${themeGet('fontWeights.semibold')};
  color: ${themeGet('colors.text.light')};
  background-color: ${themeGet('colors.grey.0')};
  padding: ${themeGet('space.1')}px ${themeGet('space.4')}px;
  border-top: ${themeGet('borders.1')}px solid;
  border-bottom: ${themeGet('borders.1')}px solid;
  border-color: ${themeGet('colors.border.default')};
`;

const StyledFilterBody = styled(Box)`
  background-color: ${themeGet('colors.white')};
  padding: ${themeGet('space.3')}px ${themeGet('space.4')}px;
`;
/** END */

class Filter extends Component {
  static Header = StyledFilterHeader;
  static Body = StyledFilterBody;

  constructor(props) {
    super(props);
  }

  render() {
    return <StyledFilterContainer>{this.props.children}</StyledFilterContainer>;
  }
}

Filter.propTypes = {
  children: PropTypes.any
};

Filter.displayName = 'Filter';
export default Filter;
