import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Box from 'tuxedo/components/atoms/box';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import Text from 'tuxedo/components/atoms/text';
import FontIcon from 'tuxedo/components/atoms/font-icon';

const StyledListContainer = styled(FlexBox)`
  background-color: ${themeGet('colors.grey.1')};
  font-size: ${themeGet('fontSizes.2')}px;
  width: 200px;
`;

const StyledSingleItem = styled(FlexBox)`
  cursor: pointer;
  padding-bottom: ${themeGet('space.2')}px;
  &:last-child {
    padding-bottom: 0;
  }
`;

const StyledItemsContainer = styled(Box)`
  overflow: auto;
  flex: 1 1 0px;
`;

const StyledCountContainer = styled(FlexBox)`
  height: ${themeGet('heights.5')}px;
  flex-shrink: 0;
  align-items: center;
`;

const StyledTextContainer = styled(Text)`
  word-break: break-word;
`;

class SingleSelectedItem extends React.Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(e) {
    const { onRemove, option } = this.props;
    onRemove(option, e);
  }

  render() {
    const { option, labelKey } = this.props;
    return (
      <StyledSingleItem onClick={this.onRemove}>
        <Text>
          <FontIcon color='blue' type='icon-Cross' size={1} />
        </Text>
        <Box pl={1}>
          <StyledTextContainer color='blue' fontWeight='semibold'>
            {option[labelKey]}
          </StyledTextContainer>
        </Box>
      </StyledSingleItem>
    );
  }
}

SingleSelectedItem.propTypes = {
  onRemove: PropTypes.func,
  option: PropTypes.shape({
    key: PropTypes.any,
    label: PropTypes.string
  }),
  labelKey: PropTypes.string
};

SingleSelectedItem.defaultProps = {
  labelKey: 'label'
};

export default function SelectionDisplayList({
  selectedOptions = [],
  onRemove,
  labelKey = 'label'
}) {
  const noOfItems = selectedOptions.length;
  const itemsLabel = noOfItems === 1 ? 'item' : 'items';
  return (
    <StyledListContainer flexDirection='column'>
      <StyledCountContainer px={3}>
        <Text fontWeight='bold'> {`${noOfItems} ${itemsLabel} selected`} </Text>
      </StyledCountContainer>
      <StyledItemsContainer p={3}>
        {selectedOptions.map((option, index) => (
          <SingleSelectedItem
            key={option.key || index}
            option={option}
            labelKey={labelKey}
            onRemove={onRemove}
          />
        ))}
      </StyledItemsContainer>
    </StyledListContainer>
  );
}

SelectionDisplayList.propTypes = {
  /** an array of options object constaining one key to used as display label defaults to label key */
  selectedOptions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      label: PropTypes.string
    })
  ),
  /** call back called with the option object */
  onRemove: PropTypes.func,
  /** key in the object which corresponds to display label */
  labelKey: PropTypes.string
};

SelectionDisplayList.defaultProps = {
  selectedOptions: [],
  labelKey: 'label'
};

SelectionDisplayList.displayName = 'MultiSelect.SelectionDisplayList';
