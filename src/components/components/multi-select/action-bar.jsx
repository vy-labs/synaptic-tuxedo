import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import PropTypes from 'prop-types';

import Box from '../../atoms/box';
import FlexBox from '../../atoms/flexbox';
import Text from '../../atoms/text';
import Button from '../../antd-extensions/button';

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
