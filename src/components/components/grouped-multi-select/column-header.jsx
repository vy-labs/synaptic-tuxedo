import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import styled from 'styled-components';
import Box from 'tuxedo/components/atoms/box';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import Text from 'tuxedo/components/atoms/text';
import Checkbox from 'tuxedo/components/antd-extensions/checkbox';

const StyledColumnHeader = styled(FlexBox)`
  background-color: ${themeGet('colors.grey.1')};
  border: 1px solid ${themeGet('colors.border.default')};
  border-right-color: transparent;
  border-left-color: transparent;
`;

export default class ColumnHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(e) {
    const { header, onHeaderClick } = this.props;
    onHeaderClick(header, e.target.checked);
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
            onChange={this.handleHeaderClick}
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
