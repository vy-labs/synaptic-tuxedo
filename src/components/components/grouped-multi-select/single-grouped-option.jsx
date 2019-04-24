import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ColumnHeader from './column-header';

import Box from '../../atoms/box';
import FlexBox from '../../atoms/flexbox';
import Text from '../../atoms/text';
import Checkbox from '../../antd-extensions/checkbox';

function getIsHeaderSelected({ options, valueSet, valueKey }) {
  return options.every(option => valueSet.has(option[valueKey]));
}

function getIsHeaderInderminate({ options, valueSet, valueKey }) {
  return options.some(option => valueSet.has(option[valueKey]));
}

export default class SingleGroupedOption extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onHeaderClick = this.onHeaderClick.bind(this);
  }

  onChange(option) {
    return e => {
      const { header } = this.props;
      this.props.onChange(option, header, e.target.checked);
    };
  }

  onHeaderClick(header, checked) {
    const { options } = this.props;
    this.props.onHeaderClick(options, header, checked);
  }

  render() {
    const {
      valueSet,
      valueKey,
      labelKey,
      headerLabelKey,
      header,
      options,
      noOfColumns
    } = this.props;
    const noOfColumnsToDraw = noOfColumns || header.noOfColumns || 3;
    const chunks = _.chunk(options, noOfColumnsToDraw);
    const isHeaderSelected = getIsHeaderSelected({
      options,
      valueSet,
      valueKey
    });
    const isHeaderInderminate =
      !isHeaderSelected &&
      getIsHeaderInderminate({ options, valueSet, valueKey });
    return (
      <FlexBox flexDirection='column' mb={3}>
        <Box mb={3}>
          <ColumnHeader
            header={header}
            isHeaderInderminate={isHeaderInderminate}
            onHeaderClick={this.onHeaderClick}
            isHeaderSelected={isHeaderSelected}
            headerLabelKey={headerLabelKey}
          />
        </Box>
        {chunks.map((chunk, index) => (
          <FlexBox mx={3} key={index}>
            {chunk.map(column => (
              <FlexBox
                flexBasis={`${100 / noOfColumnsToDraw}%`}
                value={column[valueKey]}
              >
                <Checkbox
                  checked={valueSet.has(column[valueKey])}
                  onChange={this.onChange(column)}
                >
                  <Text fontWeight='semibold'>{column[labelKey]}</Text>
                </Checkbox>
              </FlexBox>
            ))}
          </FlexBox>
        ))}
      </FlexBox>
    );
  }
}

SingleGroupedOption.propTypes = {
  onChange: PropTypes.func.isRequired,
  valueSet: PropTypes.instanceOf(Set).isRequired,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  headerLabelKey: PropTypes.string,
  header: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  noOfColumns: PropTypes.number,
  onHeaderClick: PropTypes.func.isRequired
};

SingleGroupedOption.defaultProps = {
  valueKey: 'value',
  labelKey: 'label',
  headerLabelKey: 'label',
  noOfColumns: 1
};
