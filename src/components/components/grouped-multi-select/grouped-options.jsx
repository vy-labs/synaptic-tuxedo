import React from 'react';
import PropTypes from 'prop-types';
import SingleGroupedOption from './single-grouped-option';
import Box from '../../atoms/box';

export default function GroupedOptions(props) {
  const {
    options,
    valueKey,
    labelKey,
    valueSet,
    headerLabelKey,
    onChange,
    noOfColumns,
    onHeaderClick
  } = props;
  return (
    <Box width='100%'>
      {options.map(option => (
        <SingleGroupedOption
          key={option[valueKey]}
          onChange={onChange}
          valueSet={valueSet}
          valueKey={valueKey}
          labelKey={labelKey}
          headerLabelKey={headerLabelKey}
          onHeaderClick={onHeaderClick}
          header={option.header}
          options={option.options}
          noOfColumns={noOfColumns}
        />
      ))}
    </Box>
  );
}

GroupedOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.object.isRequired,
      options: PropTypes.array.isRequired
    })
  ).isRequired,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  valueSet: PropTypes.instanceOf(Set).isRequired,
  headerLabelKey: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  noOfColumns: PropTypes.number,
  onHeaderClick: PropTypes.func.isRequired
};

GroupedOptions.defaultProps = {
  valueKey: 'value',
  labelKey: 'label',
  headerLabelKey: 'label',
  noOfColumns: 1
};
