import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import isEqualProps from 'tuxedo/utils/isEqualProps';
import LLMultiSelect from './ll-multi-select';

function getProcessedOptions(options, value, valueKey) {
  const valueSet = new Set(value.map(v => v && v.toString()));
  return options.map((optionsArray, columnIndex) =>
    optionsArray.map((option, selfIndex) => ({
      ...option,
      checked: valueSet.has(option[valueKey] && option[valueKey].toString()),
      columnIndex,
      selfIndex
    }))
  );
}

export default class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      initialOptions: [],
      initialValue: []
    };
    this.onChange = this.onChange.bind(this);
    this.markAll = this.markAll.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.initializeState = this.initializeState.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      !isEqualProps(nextProps.options, prevState.initialOptions) ||
      !isEqualProps(nextProps.value, prevState.initialValue)
    ) {
      return {
        options: getProcessedOptions(
          nextProps.options,
          nextProps.value,
          nextProps.valueKey
        ),
        initialOptions: nextProps.options,
        initialValue: nextProps.value
      };
    }

    return null;
  }

  onChange(option) {
    const { options } = this.state;
    const { columnIndex } = option;
    const updatedOptionsColumn = Object.assign([], options[columnIndex], {
      [option.selfIndex]: {
        ...option,
        checked: !option.checked
      }
    });
    this.setState(
      {
        options: Object.assign([], options, {
          [columnIndex]: updatedOptionsColumn
        })
      },
      this.notifyParentOfChange
    );
  }

  onSearchChange(searchTerm) {
    this.setState({ searchTerm });
  }

  getSelectionDisplayList() {
    const { options } = this.state;
    const { labelKey } = this.props;
    const flattenedArray = [].concat(...options);
    const selectedOptions = flattenedArray.filter(option => option.checked);

    return (
      <LLMultiSelect.SelectionDisplayList
        selectedOptions={selectedOptions}
        labelKey={labelKey || 'name'}
        onRemove={this.onChange}
      />
    );
  }

  getValueObject() {
    const { options } = this.state;
    const { valueKey, onChange } = this.props;
    const valueOptions = _.flatten(
      options.map(optionArray => optionArray.filter(option => option.checked))
    );
    const value = valueOptions.map(option => option[valueKey]);
    return { value, options: valueOptions };
  }

  handleApply() {
    const { onApply } = this.props;
    onApply && onApply(this.getValueObject());
  }

  handleCancel() {
    const { onCancel } = this.props;
    onCancel && onCancel();
    this.initializeState();
  }

  notifyParentOfChange() {
    const { onChange } = this.props;
    onChange && onChange(this.getValueObject());
  }

  markAll(markValue) {
    return () => {
      const { options } = this.state;
      const updateOptions = options.map(optionArray =>
        optionArray.map(option => ({
          ...option,
          checked: markValue
        }))
      );
      this.setState({ options: updateOptions }, this.notifyParentOfChange);
    };
  }

  initializeState() {
    const { initialOptions, initialValue } = this.state;
    const { valueKey } = this.props;
    this.setState({
      searchTerm: '',
      options: getProcessedOptions(initialOptions, initialValue, valueKey)
    });
  }

  render() {
    const {
      labelKey = 'label',
      hideSelectionDisplayList,
      hideActionBar,
      hideToolbar,
      width,
      height,
      searchWidth,
      optionLabelRenderer
    } = this.props;

    const selectionDisplayList =
      !hideSelectionDisplayList && this.getSelectionDisplayList();
    const { options, searchTerm } = this.state;

    const filteredOptions =
      searchTerm &&
      options
        .map(optionsArray =>
          optionsArray.filter(
            option =>
              option[labelKey]
                .toLowerCase()
                .indexOf(searchTerm.toLowerCase()) !== -1
          )
        )
        .filter(filteredArray => filteredArray && filteredArray.length);

    const optionsToRender = searchTerm ? filteredOptions : options;
    const toolbar = !hideToolbar && (
      <LLMultiSelect.Toolbar
        onSelectAllClick={this.markAll(true)}
        width={searchWidth}
        searchTerm={searchTerm}
        onClearClick={this.markAll(false)}
        onSearchChange={this.onSearchChange}
        multiColumn={optionsToRender.length > 1}
      />
    );

    const actionBar = !hideActionBar && (
      <LLMultiSelect.ActionBar
        onApply={this.handleApply}
        onCancel={this.handleCancel}
      />
    );

    return (
      <LLMultiSelect
        toolbar={toolbar}
        actionBar={actionBar}
        selectionDisplayList={selectionDisplayList}
        width={width}
        height={height}
      >
        {optionsToRender.map((optionArray, index) => (
          <LLMultiSelect.OptionsColumn
            options={optionArray}
            key={index}
            labelKey={labelKey}
            valueKey='checked'
            onChange={this.onChange}
            optionLabelRenderer={optionLabelRenderer}
          />
        ))}
      </LLMultiSelect>
    );
  }
}

MultiSelect.propTypes = {
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  hideSelectionDisplayList: PropTypes.bool,
  value: PropTypes.array,
  hideActionBar: PropTypes.bool,
  hideToolbar: PropTypes.bool,
  /** called with the an object with keys value and options both containing arrays corresponding to selected options */
  onChange: PropTypes.func,
  /** called with the final state of the options when the button is pressed */
  onApply: PropTypes.func,
  /** called when the cancel button is pressed */
  onCancel: PropTypes.func,
  /** other than key all the other object attributes map to antd checkbox */
  options: PropTypes.array,
  /** with of tree select */
  width: PropTypes.string,
  height: PropTypes.number,
  /** width of search input */
  searchWidth: PropTypes.string,
  /** option label render function */
  optionLabelRenderer: PropTypes.func
};

MultiSelect.defaultProps = {
  labelKey: 'label',
  valueKey: 'id',
  hideSelectionDisplayList: false,
  hideActionBar: false,
  hideToolbar: false
};

MultiSelect.displayName = 'MultiSelect';
