import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import styled from 'styled-components';

import Box from '../../atoms/box';
import FlexBox from '../../atoms/flexbox';
import Text from '../../atoms/text';
import Checkbox from '../../antd-extensions/checkbox';

const StyledColumnHeader = styled(FlexBox)`
  background-color: ${themeGet('colors.grey.1')};
  border: 1px solid ${themeGet('colors.border.default')};
  border-right-color: transparent;
  border-left-color: transparent;
`;

export default class ColumnHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onHeaderClick = this.onHeaderClick.bind(this);
  }

  onHeaderClick(e) {
    const { header } = this.props;
    this.props.onHeaderClick(header, e.target.checked);
  }

  render() {
    const {
      header,
      isHeaderInderminate,
      isHeaderSelected,
      headerLabelKey
    } = this.props;
    return (
      <StyledColumnHeader flex={1}>
        <Box mx={3}>
          <Checkbox
            checked={isHeaderSelected}
            indeterminate={isHeaderInderminate}
            onChange={this.onHeaderClick}
          >
            <Text
              fontSize={1}
              fontWeight='semibold'
              textStyle='caps'
              color='disabled'
            >
              {header[headerLabelKey]}
            </Text>
          </Checkbox>
        </Box>
      </StyledColumnHeader>
    );
  }
}

ColumnHeader.propTypes = {
  header: PropTypes.object.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  isHeaderInderminate: PropTypes.bool,
  isHeaderSelected: PropTypes.bool,
  headerLabelKey: PropTypes.string
};

ColumnHeader.defaultProps = {
  headerLabelKey: 'label',
  isHeaderSelected: false,
  isHeaderInderminate: false
};
