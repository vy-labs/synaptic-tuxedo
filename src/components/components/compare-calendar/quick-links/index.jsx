import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FlexBox from '../../../atoms/flexbox';
import Box from '../../../atoms/box';
import Text from '../../../atoms/text';

const StyledQuickLink = styled(Text)`
  ${({ disabled }) =>
    !disabled
      ? `
    cursor: pointer;
    &:hover {
    text-decoration: underline;
  }`
      : `
    pointer-events: none
  `}
`;

const StyledQuickLinksContainer = styled(FlexBox)`
  line-height: initial;
`;

function QuickLinks({ quickLinks, onClick, min, selected }) {
  const onClickGenerator = quickLink => () => onClick(quickLink);
  return (
    <StyledQuickLinksContainer py={2}>
      <Box mx={2}>
        <Text color='disabled' fontSize={1} fontWeight='semibold'>
          QUICK LINKS
        </Text>
      </Box>
      {quickLinks.map(quickLink => {
        const disabled = quickLink.getTargetDate(selected).isBefore(min);
        return (
          <Box mx={2} key={quickLink.label}>
            <StyledQuickLink
              color={disabled ? 'disabled' : 'blue'}
              fontSize={1}
              disabled={disabled}
              fontWeight='semibold'
              onClick={onClickGenerator(quickLink)}
            >
              {quickLink.label}
            </StyledQuickLink>
          </Box>
        );
      })}
    </StyledQuickLinksContainer>
  );
}

QuickLinks.propTypes = {
  quickLinks: PropTypes.array,
  onClick: PropTypes.func,
  // to decide if a quicklink is disabled or not
  min: PropTypes.object,
  // selected date on calendar one
  selected: PropTypes.object
};

QuickLinks.displayName = 'QuickLinks';

export default QuickLinks;
