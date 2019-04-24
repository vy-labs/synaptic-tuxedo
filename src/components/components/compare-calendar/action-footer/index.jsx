import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import FlexBox from '../../../atoms/flexbox';
import Box from '../../../atoms/box';
import Text from '../../../atoms/text';
import Button from '../../../antd-extensions/button';

const StyledFooterContainer = styled(FlexBox)`
  border-top: 1px solid ${themeGet('colors.border.default')};
`;

const StyledBoldText = styled(Text)`
  font-weight: ${themeGet('fontWeights.bold')};
`;

function ActionFooter(props) {
  const {
    selectionLabelOne,
    selectionLabelTwo,
    selectedOne,
    selectedTwo,
    onApply,
    selectedRollup,
    onCancel
  } = props;

  function onApplyClick() {
    onApply &&
      onApply({
        selectedRollup,
        selectedOne,
        selectedTwo
      });
  }

  function onCancelClick() {
    onCancel && onCancel();
  }

  return (
    <StyledFooterContainer
      alignItems='center'
      justifyContent='space-between'
      px={3}
      py={2}
    >
      <StyledBoldText>{`${selectionLabelOne} vs ${selectionLabelTwo}`}</StyledBoldText>
      <FlexBox>
        <Box mr={2}>
          <Button onClick={onCancelClick}>Cancel</Button>
        </Box>
        <Button type='primary' onClick={onApplyClick}>
          Apply
        </Button>
      </FlexBox>
    </StyledFooterContainer>
  );
}

ActionFooter.propTypes = {
  selectionLabelOne: PropTypes.string,
  selectionLabelTwo: PropTypes.string,
  selectedOne: PropTypes.object,
  selectedTwo: PropTypes.object,
  onApply: PropTypes.func,
  selectedRollup: PropTypes.string,
  onCancel: PropTypes.func
};

ActionFooter.displayName = 'ActionFooter';

export default ActionFooter;
