import React from 'react';
import PropTypes from 'prop-types';
import MultiSelect from 'tuxedo/components/components/multi-select/ll-multi-select';
import isEqualProps from 'tuxedo/utils/isEqualProps';
import TreeComponent from './tree-component';
import { AVAILABLE_SIZES } from './constants';

export default class TreeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueToTreeDataDict: [],
      value: [],
      dataPart: [],
      initialValue: []
    };
    this.syncValueToTreeDataDictWithParent = this.syncValueToTreeDataDictWithParent.bind(
      this
    );
    this.handleRemove = this.handleRemove.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (!isEqualProps(props.value, state.initialValue)) {
      return { value: props.value, initialValue: props.value };
    }
    return null;
  }

  handleRemove(removedOption) {
    const { valueKey } = this.props;
    const { valueToTreeDataDict, value } = this.state;
    const updateValues = value.filter(
      option =>
        option.toString() !==
        (removedOption[valueKey] && removedOption[valueKey].toString())
    );
    const updatedDataPart = updateValues.map(val => valueToTreeDataDict[val]);
    this.handleChange({ value: updateValues, dataPart: updatedDataPart });
  }

  syncValueToTreeDataDictWithParent(valueToTreeDataDict) {
    this.setState({ valueToTreeDataDict });
  }

  handleApply() {
    const { value, dataPart } = this.state;
    const { onApply } = this.props;
    onApply && onApply({ value, dataPart });
  }

  handleCancel() {
    const { onCancel } = this.props;
    onCancel && onCancel();
  }

  handleChange(changeObj) {
    const { onChange } = this.props;
    this.setState({
      ...changeObj
    });
    onChange && onChange(changeObj);
  }

  render() {
    const {
      labelKey,
      onApply,
      onCancel,
      width,
      height,
      value: propsValue = [],
      onChange,
      searchWidth,
      ...restProps
    } = this.props;
    const { valueToTreeDataDict, value = [] } = this.state;

    const actionBar = (
      <MultiSelect.ActionBar
        onApply={this.handleApply}
        onCancel={this.handleCancel}
      />
    );
    const selectionDisplayList = (
      <MultiSelect.SelectionDisplayList
        selectedOptions={value
          .map(val => valueToTreeDataDict[val])
          .filter(val => val)}
        onRemove={this.handleRemove}
        labelKey='labelWithpath'
      />
    );
    return (
      <MultiSelect
        selectionDisplayList={selectionDisplayList}
        actionBar={actionBar}
        width={width}
        height={height}
      >
        <TreeComponent
          labelKey={labelKey}
          searchWidth={searchWidth}
          onChange={this.handleChange}
          value={value}
          syncValueToTreeDataDictWithParent={
            this.syncValueToTreeDataDictWithParent
          }
          {...restProps}
        />
      </MultiSelect>
    );
  }
}

TreeSelect.propTypes = {
  width: PropTypes.string,
  height: PropTypes.number,
  searchWidth: PropTypes.string,
  syncValueToTreeDataDictWithParent: PropTypes.func,
  className: PropTypes.string,
  // not implemented yet
  size: PropTypes.oneOf(AVAILABLE_SIZES),
  valueKey: PropTypes.string, // default: 'value'
  labelKey: PropTypes.string, // default: 'label'
  value: PropTypes.array,
  onChange: PropTypes.func,
  treeDefaultExpandAll: PropTypes.bool,
  data: PropTypes.array.isRequired,
  inputConfig: PropTypes.shape({
    valueRenderer: PropTypes.func,
    placeholder: PropTypes.string,
    arrowRenderer: PropTypes.func
  }),
  hasSearch: PropTypes.bool,
  onApply: PropTypes.func,
  onCancel: PropTypes.func,
  showCheckedStrategy: PropTypes.string,
  searchConfig: PropTypes.shape({
    highlightClass: PropTypes.string,
    caseSensitive: PropTypes.bool
  }),
  selectedOptionsConfig: PropTypes.shape({
    optionRenderer: PropTypes.func,
    headerTextRenderer: PropTypes.func,
    hideOptionsCross: PropTypes.bool,
    onOptionCrossClick: PropTypes.func
  })
};

TreeSelect.defaultProps = {
  labelKey: 'label',
  width: '600px',
  height: 45,
  searchWidth: '192px',
  valueKey: 'value',
  hasSearch: true,
  size: AVAILABLE_SIZES[0],
  onChange: () => {}
};

TreeSelect.displayName = 'TreeSelect';
