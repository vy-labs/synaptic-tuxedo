import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import FontIcon from 'tuxedo/components/atoms/font-icon';

const StyledIconContainer = styled(FlexBox)`
  width: ${themeGet('heights.3')}px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: ${themeGet('colors.blue.1')};
`;

/**
 * Create left side part of the filter drop-down
 */
function IconContainer({ type }) {
  return (
    <StyledIconContainer>
      {React.isValidElement(type) ? (
        type
      ) : (
        <FontIcon color='text.light' size={1} type={type} />
      )}
    </StyledIconContainer>
  );
}

IconContainer.propTypes = {
  /** app theme */
  theme: PropTypes.object,
  /** type of the icon to display */
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

IconContainer.displayName = 'IconContainer';

export default IconContainer;
