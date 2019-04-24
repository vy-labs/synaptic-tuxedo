import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import FlexBox from '../../atoms/flexbox';
import Box from '../../atoms/box';
import FontIcon from '../../atoms/font-icon';
import Text from '../../atoms/text';

const directionMap = {
  ASC: 'asc',
  DESC: 'desc'
};

const DirectionContainer = styled(Text)`
  line-height: initial;
`;

const StyledSorterContainer = styled(Box)`
  ${props =>
    props.active && `background-color: ${themeGet('colors.blue.1')(props)};`}
  border-radius: ${themeGet('radii.1')}px;
  cursor: pointer;
`;

function getDirectionComponent(direction) {
  if (!direction) {
    // This No sorting currently
    return <FontIcon type='icon-Sort' size={2} />;
  }
  if (direction === directionMap.ASC) {
    return <FontIcon type='icon-ascending' size={2} />;
  }
  if (direction === directionMap.DESC) {
    return <FontIcon type='icon-descending' size={2} />;
  }
}

export default function Sorter(props) {
  const { name, direction, onClick, align, className, disableSort } = props;
  const active = !!direction;
  return (
    <StyledSorterContainer
      className={className}
      width='100%'
      onClick={disableSort ? () => {} : onClick}
      active={active}
    >
      <FlexBox
        p={1}
        justifyContent={align === 'left' ? 'flex-start' : 'flex-end'}
        alignItems='center'
      >
        <Text
          fontSize={1}
          fontWeight='semibold'
          color={active ? 'blue' : 'light'}
        >
          {name}
        </Text>
        {!disableSort && (
          <DirectionContainer
            fontSize={1}
            fontWeight='semibold'
            color={active ? 'blue' : 'light'}
          >
            {getDirectionComponent(direction)}
          </DirectionContainer>
        )}
      </FlexBox>
    </StyledSorterContainer>
  );
}

Sorter.propTypes = {
  name: PropTypes.string,
  direction: PropTypes.string,
  onClick: PropTypes.func,
  align: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  disableSort: PropTypes.bool
};

Sorter.displayName = 'Sorter';
