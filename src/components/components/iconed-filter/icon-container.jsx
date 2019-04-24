import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';

import FlexBox from '../../atoms/flexbox';
// import SvgIcon from '../../components/svg-icon';
import FontIcon from '../../atoms/font-icon';

const StyledIconContainer = styled(FlexBox)`
  width: ${themeGet('heights.3')}px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: ${themeGet('colors.blue.1')};
`;

/** create left side part of the filter drop-down  */
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
