import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { TreeSelect } from 'antd';
import * as JsSearch from 'js-search';
import { themeGet } from 'styled-system';
import styled from 'styled-components';
import getRandomId from 'tuxedo/utils/getRandomId';
import isEqualProps from 'tuxedo/utils/isEqualProps';
import shouldComponentUpdateLodash from 'tuxedo/utils/shouldComponentUpdateLodash';
import { highlightKeyword } from 'tuxedo/utils/stringUtils';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import Checkbox from 'tuxedo/components/antd-extensions/checkbox';
import MultiSelect from 'tuxedo/components/components/multi-select/ll-multi-select';
import { AVAILABLE_SIZES, AVAILABLE_CHECK_STRATEGIES } from './constants';

const StyledTreeContainer = styled(FlexBox)`
  position: relative;
  flex: 1;

  .tree-select-row {
    padding: 0 ${themeGet('space.2')}px;
    white-space: nowrap;
  }
  .ant-select-selection--multiple {
    display: none;
  }

  .ant-select-not-found {
    padding: 0 ${themeGet('space.2')}px;
  }
  .ant-select-tree-checkbox-inner {
    border-radius: ${themeGet('radii.1')}px;
  }

  .ant-select-tree-checkbox-indeterminate {
    .ant-select-tree-checkbox-inner {
      ::after {
        height: 2px;
        width: 8px;
        background-color: ${themeGet('colors.white')};
        border-radius: 1px;
      }
      background-color: ${themeGet('colors.blue.6')};
      border-color: ${themeGet('colors.blue.6')};
    }
  }

  .ant-select-tree {
    line-height: 1.3;
    display: flex;
    flex-direction: column;

    li {
      white-space: normal;
      margin: ${themeGet('space.1')}px 0;

      .ant-select-tree-switcher, .ant-select-tree-checkbox {
        vertical-align: top;
        top: 0px;
      }

      .ant-select-tree-switcher {
        padding: ${themeGet('space.1')}px;
        margin: ${themeGet('space.1')}px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: ${themeGet('colors.grey.2')};
        height: ${themeGet('heights.2')}px;
        width: ${themeGet('heights.2')}px;
        border-radius: ${themeGet('radii.1')}px;
        .ant-select-switcher-icon {
          font-size: ${themeGet('fontSizes.3')}px !important;
        }
        &.ant-select-tree-switcher-noop {
          background-color: ${themeGet('colors.transparent')};
        }

        i > svg > path {
          fill: ${themeGet('colors.grey.8')};
        }
      }

      .ant-select-tree-checkbox {
        padding: ${themeGet('space.1')}px;
        margin: 0;
      }

      span.ant-select-tree-checkbox + .ant-select-tree-node-content-wrapper {
        width: ${props => `calc(100% - ${themeGet('space.1')(props) * 12}px)`};
        line-height: ${themeGet('heights.2')}px;
        padding: ${themeGet('space.1')}px;
        font-weight: ${themeGet('fontWeights.semibold')}

        &:hover {
          background: ${themeGet('colors.grey.2')};
          border-radius: ${themeGet('radii.1')}px;
        }
      }

      ul {
        padding-left: ${themeGet('space.6')}px;
        margin-left: ${themeGet('space.3')}px;
        padding: 0 0 0 ${themeGet('space.3')}px;
        background-color: initial;
        border-left: 1px solid ${themeGet('colors.border.default')};
        .ant-select-tree-node-content-wrapper:hover {
          background: ${themeGet('colors.grey.2')};
          border-radius: ${themeGet('radii.1')}px;
        }
      }
    }

    .ant-select-tree-treenode-disabled {
      pointer-events: none;
    }
  }
`;

class TreeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputValue: '',
      searchValueToShow: '',
      searchChecked: [],
      flatMap: [],
      treeData: [],
      valueToTreeDataDict: {}
    };
    this.componentID = getRandomId();
    // this bindings
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.getComponentID = this.getComponentID.bind(this);
    this.getPopupContainer = this.getPopupContainer.bind(this);
    this.handleTreeChange = this.handleTreeChange.bind(this);
    this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
    this.handleSearchTreeChange = this.handleSearchTreeChange.bind(this);
  }

  componentDidMount() {
    const { data, hasSearch } = this.props;
    if (!_.isEmpty(data)) {
      hasSearch && this.initializeJsSearch();
      this.processData(data, this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { data, hasSearch, value } = this.props;
    const { data: nextData, value: nextValue } = nextProps;
    if (!isEqualProps(data, nextData)) {
      hasSearch && this.initializeJsSearch();
      this.processData(nextData, nextProps);
    }
    if (!isEqualProps(value, nextValue)) {
      this.setState({
        searchChecked: []
      });
    }
  }

  shouldComponentUpdate = shouldComponentUpdateLodash;

  getPopupContainer() {
    return document.getElementById(this.getComponentID());
  }

  getComponentID() {
    const { componentID = this.componentID } = this.props;
    return `synTreeSelect-${componentID}`;
  }

  getMaxHeightForDD() {
    if (this.treeSectRef) {
      const clientRects = this.treeSectRef.getClientRects()
        ? this.treeSectRef.getClientRects()[0]
        : {};
      if (clientRects && clientRects.height) {
        return clientRects.height - 5;
      }
    }
    return 445;
  }

  getFilteredValues(searchInputValue) {
    const { searchConfig = {} } = this.props;
    const { highlightClass, caseSensitive } = searchConfig;
    if (this.jsSearchInstance) {
      return this.jsSearchInstance
        .search(searchInputValue)
        .map(elem => {
          const elemCopy = Object.assign({}, elem);
          elemCopy.label = highlightKeyword(
            elemCopy.labelWithpath,
            searchInputValue,
            {
              highlightClass,
              caseSensitive
            }
          );
          return elemCopy;
        })
        .sort((a, b) => a.uniqueId > b.uniqueId);
    }

    return [];
  }

  getTreeProps(treeData, value, onChangeFunc) {
    if (!treeData.length) {
      value = []; // Minor hack for setting value only when treeData present
    }
    const {
      treeDefaultExpandAll = false,
      showCheckedStrategy = 'show_parent'
    } = this.props;
    return {
      treeCheckable: <span className='ant-select-tree-checkbox-inner' />,
      showCheckedStrategy:
        AVAILABLE_CHECK_STRATEGIES[showCheckedStrategy] ||
        AVAILABLE_CHECK_STRATEGIES.show_parent,
      treeDefaultExpandAll,
      searchPlaceholder: 'Please select',
      prefixAria: 'ant-select',
      prefixCls: 'ant-select',
      style: {
        width: 0,
        height: 0,
        lineHeight: 0,
        fontSize: 0
      },
      dropdownStyle: {
        width: '100%',
        boxShadow: 'none',
        maxHeight: this.getMaxHeightForDD()
      },
      dropdownMatchSelectWidth: false,
      open: true,
      showSearch: false,
      onDropdownVisibleChange: () => false,
      getPopupContainer: this.getPopupContainer,
      onChange: onChangeFunc,
      treeData,
      value
    };
  }

  setRealSearchTerm = _.debounce(value => {
    const { value: treeValue } = this.props;
    this.setState({
      searchInputValue: value,
      searchChecked: value ? treeValue.slice() : []
    });

    return null;
  }, 300);

  handleSearchTreeChange = (value, labelArr, restObj) => {
    const { valueToTreeDataDict } = this.state;
    const { value: treeValue } = this.props;
    let treeValCopy = treeValue.slice();
    const valTriggered = restObj.triggerValue;
    const valTriggeredObj = valueToTreeDataDict[valTriggered];
    const adjustedVal = this.adjustSearchNodeChangeValue(valTriggeredObj);

    // Determining push/ pop state from initial triggeredVal and value received from treeSelect
    if (value.indexOf(valTriggered) !== -1) {
      treeValCopy.push(adjustedVal);
    } else {
      treeValCopy = treeValCopy.filter(elem => elem !== adjustedVal);
    }

    this.handleTreeChange(treeValCopy);
  };

  handleTreeChange = value => {
    const { valueToTreeDataDict } = this.state;
    const { onChange } = this.props;
    const retValArr = value.map(val => valueToTreeDataDict[val]);

    onChange &&
      onChange({
        dataPart: retValArr,
        value
      });
  };

  handleSelectAllClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const { treeData } = this.state;
    const selValues = treeData.map(brach => brach.value);
    this.handleTreeChange(selValues);
  }

  handleClearClick() {
    const { onChange } = this.props;
    onChange &&
      onChange({
        value: [],
        dataPart: []
      });
  }

  handleSearchInputChange(value) {
    this.setState({ searchValueToShow: value }, () =>
      this.setRealSearchTerm(value)
    );
  }

  checkIfAllChildrenChecked(children, treeValues) {
    let allChecked = true;
    children.map(child => {
      if (treeValues.indexOf(child.value) === -1) {
        allChecked = false;
      }
      return child;
    });
    return allChecked;
  }

  /**
   * Loop up the parent chain till we find all checked elements to be 'false'.
   */
  loopParent(parentValues, childObj) {
    const { valueToTreeDataDict } = this.state;
    const { value: treeValue } = this.props;
    const parentObj = valueToTreeDataDict[parentValues[0]] || {};
    const { children: allChildrenForParent = [] } = parentObj;
    const allChecked = this.checkIfAllChildrenChecked(allChildrenForParent, [
      ...treeValue,
      childObj.value
    ]);
    if (!allChecked || parentValues.length === 0) {
      return childObj.value;
    }
    return this.loopParent(parentValues.slice(1), parentObj);
  }

  /**
   * Adjusting value to be sent for onChange in case of search
   */
  adjustSearchNodeChangeValue(valObj) {
    const { valueToTreeDataDict } = this.state;
    const { value: valTriggered, parentValues } = valObj;
    const parentValuesReverse = parentValues.slice().reverse();
    const retVal = this.loopParent(
      parentValuesReverse,
      valueToTreeDataDict[valTriggered]
    );
    return retVal;
  }

  initializeJsSearch() {
    this.jsSearchInstance = null;
    this.jsSearchInstance = new JsSearch.Search('uniqueId');
    this.jsSearchInstance.indexStrategy = new JsSearch.PrefixIndexStrategy();
    this.jsSearchInstance.tokenizer = {
      tokenize: text => {
        const tokens = new JsSearch.SimpleTokenizer().tokenize(text);
        return (tokens || []).concat(text.replace(/-/g, ''));
      }
    };
    this.jsSearchInstance.addIndex('label');
    this.jsSearchInstance.addIndex('value');
  }

  processAndFlatten(
    data,
    flatMap,
    valueToTreeDataDict,
    {
      prevIndex = '0',
      level = 0,
      prevPath = '',
      parentValues = [],
      parent = null
    }
  ) {
    const { labelKey, valueKey } = this.props;
    return data.map((elem, index) => {
      const elemCopy = Object.assign({}, elem);
      const uniqueId = `${prevIndex ? `${prevIndex}-` : ''}${index}`;
      const nextLevel = level + 1;
      elemCopy.uniqueId = elemCopy.uniqueId ? elemCopy.uniqueId : uniqueId;
      elemCopy.label = elemCopy[labelKey];
      elemCopy.value = String(elemCopy[valueKey]);
      elemCopy.level = nextLevel;
      elemCopy.labelWithpath = `${prevPath ? `${prevPath} > ` : ''}${
        elemCopy.label
      }`;
      elemCopy.parentValues = parentValues;
      elemCopy.parent = parent;

      if (elemCopy.children && elemCopy.children.length) {
        elemCopy.children = this.processAndFlatten(
          elemCopy.children,
          flatMap,
          valueToTreeDataDict,
          {
            prevIndex: uniqueId,
            level: nextLevel,
            prevPath: elemCopy.labelWithpath,
            parentValues: [...parentValues, elemCopy.value],
            parent: elemCopy.value
          }
        );
      }

      flatMap.push(Object.assign({}, elemCopy));
      valueToTreeDataDict[elemCopy.value] = Object.assign({}, elemCopy);
      return elemCopy;
    });
  }

  processData(data, props) {
    const { hasSearch, syncValueToTreeDataDictWithParent } = props;
    const flatMap = [];
    const valueToTreeDataDict = {};
    const treeData = this.processAndFlatten(
      data,
      flatMap,
      valueToTreeDataDict,
      {}
    );

    hasSearch && this.jsSearchInstance.addDocuments(flatMap);
    syncValueToTreeDataDictWithParent &&
      syncValueToTreeDataDictWithParent(valueToTreeDataDict);

    this.setState({
      flatMap,
      treeData,
      valueToTreeDataDict
    });
  }

  renderSearchTree() {
    const { searchChecked, searchInputValue } = this.state;
    const { value = [] } = this.props;
    const filteredData = this.getFilteredValues(searchInputValue);
    const uniqVals = _.uniq([...value, ...searchChecked]);
    const searchTreeValues = [];
    filteredData.map(treeBranch => {
      const intersection = _.intersection(uniqVals, treeBranch.parentValues);
      if (intersection.length || value.indexOf(treeBranch.value) !== -1) {
        searchTreeValues.push(treeBranch.value);
        treeBranch.disabled = true;
      }
      return treeBranch;
    });
    const tProps = this.getTreeProps(
      filteredData,
      _.uniq([...value, ...searchTreeValues]),
      this.handleSearchTreeChange
    );

    return <TreeSelect {...tProps} key='tree-select-search-tree' />;
  }

  renderDefaultTree() {
    const { treeData } = this.state;
    const { value = [] } = this.props;
    const tProps = this.getTreeProps(treeData, value, this.handleTreeChange);
    return <TreeSelect {...tProps} key='tree-select-default-tree' />;
  }

  render() {
    const { searchValueToShow, searchInputValue } = this.state;
    const { hasSearch, searchWidth } = this.props;
    const toolbar = (
      <MultiSelect.Toolbar
        onSelectAllClick={this.handleSelectAllClick}
        onClearClick={this.handleClearClick}
        onSearchChange={this.handleSearchInputChange}
        searchTerm={searchValueToShow}
        width={searchWidth}
      />
    );

    return (
      <FlexBox flexDirection='column' flex={1}>
        {hasSearch && toolbar}
        <StyledTreeContainer ml={1}>
          {searchInputValue
            ? this.renderSearchTree()
            : this.renderDefaultTree()}
          <div
            id={this.getComponentID()}
            ref={treeSectRef => {
              this.treeSectRef = treeSectRef;
            }}
            className='tree-container'
          />
        </StyledTreeContainer>
      </FlexBox>
    );
  }
}

TreeComponent.propTypes = {
  componentID: PropTypes.any,
  searchWidth: PropTypes.string,
  syncValueToTreeDataDictWithParent: PropTypes.func,
  className: PropTypes.string,
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

TreeComponent.defaultProps = {
  labelKey: 'label',
  valueKey: 'value',
  hasSearch: true,
  size: AVAILABLE_SIZES[0],
  onChange: () => {}
};

export default TreeComponent;
