import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import PropTypes from 'prop-types';
import Box from 'tuxedo/components/atoms/box';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import IconContainer from './icon-container';
import Content from './filter-content';

const StyledIconedFilterContainer = styled(FlexBox)`
  box-shadow: ${themeGet('shadows.1')};
  border-radius: ${themeGet('radii.1')}px;
  background: ${themeGet('colors.white')};
`;

const StyledFilterContent = styled(FlexBox)`
  max-width: calc(100% - ${themeGet('heights.3')}px);
`;

const StyledItemContainer = styled(Box)`
  border-right: 1px solid ${themeGet('colors.border.default')};
  max-width: 100%;
  &:last-child {
    border-right: none;
  }
`;

function IconedFilter({ children, iconType, noInline = false }) {
  return (
    <StyledIconedFilterContainer inline={!noInline} alignItems='stretch'>
      {!!iconType && <IconContainer type={iconType} />}
      <StyledFilterContent my={1} flex={1}>
        {React.Children.map(children, (child, index) => {
          return child ? (
            <StyledItemContainer key={index} px={2}>
              {child}
            </StyledItemContainer>
          ) : null;
        })}
      </StyledFilterContent>
    </StyledIconedFilterContainer>
  );
}

IconedFilter.propTypes = {
  /**
   * multiple dropdowns can be rendered which are supposed to be passed as the children
   */
  children: PropTypes.node,
  /**
   * icontype takes string pointing to our local icon names, or pass a react node
   */
  iconType: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  noInline: PropTypes.bool
};

IconedFilter.displayName = 'IconedFilter';

IconedFilter.Content = Content;

export default IconedFilter;
