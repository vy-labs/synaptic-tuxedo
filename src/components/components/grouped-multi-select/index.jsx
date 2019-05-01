import React from 'react';
import PropTypes from 'prop-types';
import shouldComponentUpdateLodash from 'tuxedo/utils/shouldComponentUpdateLodash';
import isEqualProps from 'tuxedo/utils/isEqualProps';
import MultiSelect from 'tuxedo/components/components/multi-select/ll-multi-select';
import GroupedOptions from './grouped-options';

function getNewValueState(value) {
  return {
    value,
    valueSet: new Set(value)
  };
}

export default class GroupedMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      initialValue: [],
      valueSet: new Set(),
      searchTerm: ''
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onHeaderClick = this.onHeaderClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
    this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
  }

  shouldComponentUpdate = shouldComponentUpdateLodash;

  static getDerivedStateFromProps(props, state) {
    if (!isEqualProps(props.value, state.initialValue)) {
      const stateValue = getNewValueState(props.value);
      return { ...stateValue, initialValue: props.value };
    }
    return null;
  }

  onHeaderClick(options, header, checked) {
    const { value, valueSet } = this.state;
    let newValue = [];

    const { valueKey } = this.props;
    const optionsSet = new Set(options.map(option => option[valueKey]));
    if (!checked) {
      newValue = value.filter(val => !optionsSet.has(val));
    } else {
      newValue = [...value];
      options.forEach(val => {
        if (!valueSet.has(val[valueKey])) {
          newValue.push(val[valueKey]);
        }
      });
    }
    const valueState = getNewValueState(newValue);
    this.setState(valueState);
  }

  onChange(option, header, checked) {
    const { value } = this.state;
    const { valueKey } = this.props;
    let newValue = [];
    if (checked) {
      newValue = value.concat(option[valueKey]);
    } else {
      newValue = value.filter(val => val !== option[valueKey]);
    }

    const valueState = getNewValueState(newValue);
    this.setState(valueState, () => {
      const { onChange } = this.props;
      const valueObject = this.getObjectsFromValue();
      onChange && onChange(newValue, valueObject);
    });
  }

  getFilteredOptions(data) {
    const { searchTerm } = this.state;
    const { headerLabelKey, labelKey } = this.props;

    const newData = [];
    if (searchTerm) {
      data.forEach(group => {
        // if found in header push the entire group
        if (this.searchFunction(group.header[headerLabelKey], searchTerm)) {
          newData.push(group);
        } else {
          // if any of the options in the group match, push the header along with
          // matched options
          const newOptions = group.options.filter(option =>
            this.searchFunction(option[labelKey], searchTerm)
          );
          if (newOptions.length) {
            newData.push({
              ...group,
              options: newOptions
            });
          }
        }
      });
      return newData;
    }
    return data;
  }

  getObjectsFromValue() {
    const { data, valueKey } = this.props;
    const { valueSet } = this.state;
    const valueObjects = [];
    data.forEach(group =>
      group.options.forEach(option => {
        if (valueSet.has(option[valueKey])) {
          valueObjects.push(option);
        }
      })
    );
    return valueObjects;
  }

  searchFunction(label, searchTerm) {
    return label.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  }

  handleSearchChange(searchTerm) {
    this.setState({ searchTerm });
  }

  handleSelectAllClick() {
    const { data, valueKey } = this.props;
    const newValue = [];
    data.forEach(group =>
      group.options.map(option => newValue.push(option[valueKey]))
    );
    const valueState = getNewValueState(newValue);
    this.setState(valueState);
  }

  handleClearAll() {
    this.setState({ searchTerm: '' });
    const valueState = getNewValueState([]);
    this.setState(valueState);
  }

  handleCancel() {
    const { onCancel } = this.props;
    if (!onCancel || !onCancel()) {
      this.setState(({ initialValue }) => {
        return getNewValueState(initialValue);
      });
    }
  }

  handleApply() {
    const { value } = this.state;
    const { onApply } = this.props;
    onApply && onApply(value, this.getObjectsFromValue(value));
  }

  handleRemove(removedOption) {
    this.onChange(removedOption, undefined, false);
  }

  render() {
    const {
      labelKey,
      width,
      height,
      headerLabelKey,
      noOfColumns,
      data,
      searchWidth,
      valueKey,
      isApplyDisabled,
      getErrorText,
      hideSelectAll
    } = this.props;

    const { valueSet, searchTerm } = this.state;

    const valueObjects = this.getObjectsFromValue();

    const actionBar = (
      <MultiSelect.ActionBar
        applyDisabled={isApplyDisabled(valueObjects)}
        errorText={getErrorText(valueObjects)}
        onApply={this.handleApply}
        onCancel={this.handleCancel}
      />
    );
    const selectionDisplayList = (
      <MultiSelect.SelectionDisplayList
        selectedOptions={valueObjects}
        onRemove={this.handleRemove}
        labelKey={labelKey}
      />
    );

    const toolbar = (
      <MultiSelect.Toolbar
        onSelectAllClick={this.handleSelectAllClick}
        width={searchWidth}
        searchTerm={searchTerm}
        hideSelectAll={hideSelectAll}
        onClearClick={this.handleClearAll}
        onSearchChange={this.handleSearchChange}
      />
    );

    const filteredOptions = this.getFilteredOptions(data);
    return (
      <MultiSelect
        selectionDisplayList={selectionDisplayList}
        actionBar={actionBar}
        width={width}
        height={height}
        toolbar={toolbar}
      >
        <GroupedOptions
          onChange={this.onChange}
          valueSet={valueSet}
          valueKey={valueKey}
          labelKey={labelKey}
          onHeaderClick={this.onHeaderClick}
          headerLabelKey={headerLabelKey}
          options={filteredOptions}
          noOfColumns={noOfColumns}
        />
      </MultiSelect>
    );
  }
}

GroupedMultiSelect.propTypes = {
  labelKey: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.number,
  searchWidth: PropTypes.string,
  // no of columns to render in the group, if can also be passed a key in header part of the object
  // more specific would take precedence
  noOfColumns: PropTypes.number,
  valueKey: PropTypes.string,
  headerLabelKey: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.object.isRequired,
      options: PropTypes.array.isRequired
    })
  ).isRequired,
  /* value array */
  value: PropTypes.array,
  /* called with the value array as first param, and values object array as second */
  onApply: PropTypes.func.isRequired,
  /* called with empty params */
  onCancel: PropTypes.func,
  /* called with the value array as first param, and values object array as second */
  onChange: PropTypes.func,
  /* function should return true of false to enable or disable apply, param sent is the selected values */
  isApplyDisabled: PropTypes.func,
  /* function should return true of false to show error text of disable apply, param sent is the selected values */
  getErrorText: PropTypes.func,
  /** flag to hide select all */
  hideSelectAll: PropTypes.bool
};

GroupedMultiSelect.defaultProps = {
  labelKey: 'label',
  noOfColumns: 1,
  width: '600px',
  height: 45,
  searchWidth: '192px',
  valueKey: 'value',
  headerLabelKey: 'label',
  hideSelectAll: false,
  getErrorText: () => {},
  isApplyDisabled: () => {}
};

GroupedMultiSelect.displayName = 'GroupedMultiSelect';
