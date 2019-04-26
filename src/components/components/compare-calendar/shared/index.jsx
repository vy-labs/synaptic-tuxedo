import React from 'react';
import styled from 'styled-components';
import cleanComponentProps from 'tuxedo/utils/cleanComponentProps';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import Text from 'tuxedo/components/atoms/text';
import FontIcon from 'tuxedo/components/atoms/font-icon';

function getEntityTextColor(props) {
  if (props.active) {
    return themeGet('colors.text.blue')(props);
  }
  if (props.disabled) {
    return themeGet('colors.text.disabled')(props);
  }
  return themeGet('colors.text.dark');
}

const StyledEntity = cleanComponentProps(FlexBox, ['active', 'disabled'])`
  ${props =>
    props.active && `background-color: ${themeGet('colors.blue.1')(props)}`};
  ${props => props.disabled && 'pointer-events: none'};
  cursor: pointer;
  border-radius: ${themeGet('radii.1')}px;
  color: ${getEntityTextColor};
  &:hover {
    color: ${themeGet('colors.text.blue')};
  };
`;

const SemiboldText = styled(Text)`
  font-weight: ${themeGet('fontWeights.semibold')};
`;

export function SingleEntity({ label, active, disabled, onClick, width }) {
  return (
    <StyledEntity
      alignItems='center'
      active={active}
      disabled={disabled}
      justifyContent='center'
      onClick={onClick}
      width={width}
      p={1}
      mx={1}
    >
      <SemiboldText>{label}</SemiboldText>
    </StyledEntity>
  );
}

SingleEntity.propTypes = {
  label: PropTypes.any,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  width: PropTypes.string
};

const StyledRollupHeader = styled(FlexBox)`
  line-height: ${themeGet('heights.4')}px;
  border-bottom: 1px solid ${themeGet('colors.border.default')};
`;

const StyledArrowIcons = styled(FontIcon)`
  ${props => props.disabled && 'pointer-events: none;'}
  cursor: pointer;
  i {
    svg {
      margin: 0;
    }
  }
`;

export function RollupHeader(props) {
  const {
    label,
    withIcon = true,
    onLeftClick,
    onRightClick,
    rightIconDisabled,
    leftIconDisabled
  } = props;
  return (
    <StyledRollupHeader
      width='247px'
      justifyContent='center'
      alignItems='center'
    >
      {withIcon && (
        <StyledArrowIcons
          disabled={leftIconDisabled}
          onClick={onLeftClick}
          color={leftIconDisabled ? 'text.disabled' : 'text.dark'}
          mr={5}
          type='icon-Left'
          size={0}
        />
      )}
      <FlexBox width='70px' justifyContent='center'>
        <SemiboldText>{label}</SemiboldText>
      </FlexBox>
      {withIcon && (
        <StyledArrowIcons
          disabled={rightIconDisabled}
          onClick={onRightClick}
          color={rightIconDisabled ? 'text.disabled' : 'text.dark'}
          ml={5}
          type='icon-Right'
          height='8px'
          width='8px'
        />
      )}
    </StyledRollupHeader>
  );
}

RollupHeader.propTypes = {
  label: PropTypes.any,
  withIcon: PropTypes.bool,
  onLeftClick: PropTypes.func,
  onRightClick: PropTypes.func,
  rightIconDisabled: PropTypes.bool,
  leftIconDisabled: PropTypes.bool
};

export function getRows(rowNum, itemsPerRow, itemRenderer) {
  const returnNode = [];
  const startIndex = (rowNum - 1) * itemsPerRow;
  for (let i = startIndex; i < startIndex + itemsPerRow; i += 1) {
    returnNode.push(itemRenderer(i));
  }
  return returnNode;
}
