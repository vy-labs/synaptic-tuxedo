import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Box from 'tuxedo/components/atoms/box';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import Text from 'tuxedo/components/atoms/text';
import Button from 'tuxedo/components/antd-extensions/button';

const StyledActionBarContainer = styled(FlexBox)`
  border-top: 1px solid ${themeGet('colors.border.default')};
  flex-shrink: 0;
`;

const StyledActionButton = styled(Button)`
  width: ${themeGet('sizes.12')}px;
`;

export default function ActionFooter({
  onCancel,
  onApply,
  applyDisabled,
  errorText
}) {
  return (
    <StyledActionBarContainer alignItems='center' px={3} py={2}>
      <Box flex={1}>
        {errorText && (
          <Text color='red' fontWeight='semibold'>
            {errorText}
          </Text>
        )}
      </Box>
      <Box mr={2}>
        <StyledActionButton onClick={onCancel}>Cancel</StyledActionButton>
      </Box>
      <StyledActionButton
        type='primary'
        disabled={applyDisabled}
        onClick={onApply}
      >
        Apply
      </StyledActionButton>
    </StyledActionBarContainer>
  );
}

ActionFooter.propTypes = {
  onApply: PropTypes.func,
  onCancel: PropTypes.func,
  applyDisabled: PropTypes.bool,
  errorText: PropTypes.string
};
