import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import FlexBox from '../../atoms/flexbox';
import Text from '../../atoms/text';

function variantStyling(props) {
  return {
    error: {
      color: `${themeGet('colors.red.7')(props)}`,
      'background-color': `${themeGet('colors.red.1')(props)}`
    },
    warn: {
      color: `${themeGet('colors.yellow.7')(props)}`,
      'background-color': `${themeGet('colors.yellow.1')(props)}`
    }
  };
}

const StyledFlexBox = styled(FlexBox)`
  ${props => variantStyling(props)[props.variant]}
  border-radius: ${themeGet('radii.1')}px;
`;

class ErrorMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, variant, ...rest } = this.props;
    return (
      <StyledFlexBox px={4} py={2} variant={variant} borderRadius={2} {...rest}>
        <Text fontWeight='semibold' fontSize={2}>
          {children}
        </Text>
      </StyledFlexBox>
    );
  }
}

ErrorMessage.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string
};

export default ErrorMessage;
