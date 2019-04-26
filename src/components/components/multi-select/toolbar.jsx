import React from 'react';
import ProptTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Box from 'tuxedo/components/atoms/box';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import LinkText from 'tuxedo/components/atoms/link-text';
import AntdIcon from 'tuxedo/components/antd-extensions/antd-icon';
import Input from 'tuxedo/components/antd-extensions/input';

const StyledInputBox = styled(Input)`
  .ant-input {
    height: ${themeGet('heights.3')}px;
  }
`;

const StyledTopBarContainer = styled(FlexBox)`
  border-bottom: 1px solid ${themeGet('colors.border.default')};
  height: ${themeGet('heights.5')}px;
  flex-shrink: 0;
`;

function thisSearchChange(propSearchChange) {
  return e => propSearchChange(e.target.value);
}

export default function Toolbar({
  width = '125px',
  hideSelectAll,
  onSelectAllClick = () => {},
  onClearClick = () => {},
  onSearchChange = () => {},
  searchTerm = ''
}) {
  return (
    <StyledTopBarContainer alignItems='center' py={2} px={3}>
      <FlexBox flex={1} mr={1}>
        <Box width={width}>
          <StyledInputBox
            value={searchTerm}
            placeholder='Search'
            onChange={thisSearchChange(onSearchChange)}
            suffixRenderer='loadingSearch'
          />
        </Box>
      </FlexBox>
      {!hideSelectAll && (
        <Box mr={3}>
          <LinkText
            fontSize={1}
            fontWeight='semibold'
            onClick={onSelectAllClick}
          >
            {' '}
            Select all{' '}
          </LinkText>
        </Box>
      )}
      <Box>
        <LinkText fontSize={1} fontWeight='semibold' onClick={onClearClick}>
          {' '}
          Clear{' '}
        </LinkText>
      </Box>
    </StyledTopBarContainer>
  );
}

Toolbar.propTypes = {
  /** true if multiple columns are rendered, performs some resizing based on the prop */
  multiColumn: ProptTypes.bool,
  onSelectAllClick: ProptTypes.func,
  onClearClick: ProptTypes.func,
  onSearchChange: ProptTypes.func,
  searchTerm: ProptTypes.string,
  hideSelectAll: ProptTypes.bool,
  width: ProptTypes.any
};

Toolbar.displayName = 'MultiSelect.Toolbar';
