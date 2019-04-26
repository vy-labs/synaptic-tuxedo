import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import hoistNonReactStatics from 'hoist-non-react-statics';
import FontIcon from 'tuxedo/components/atoms/font-icon';
import renderers from 'tuxedo/renderers';
import hasValue from 'tuxedo/utils/hasValue';
import shouldComponentUpdateLodash from 'tuxedo/utils/shouldComponentUpdateLodash';
import { safeGet } from 'tuxedo/utils/stringUtils';

const StyledInput = styled(Input)`
  /** Most styled can be changed through input.antd.js, anything else can be placed here */
`;

const StyledFontIcon = styled(FontIcon)`
  cursor: pointer;
  transition: color ease-in .3s;
  color: ${themeGet('colors.text.light')}
  :hover {
    color: ${themeGet('colors.text.dark')};
  };
`;

const renderersMap = {
  suffixRenders: {
    loadingSearch: renderers.loadingSearch
  }
};

const sizeIconSizeMap = {
  large: 2,
  default: 1,
  small: 0
};

class TuxedoInput extends React.Component {
  static getDerivedStateFromProps(props) {
    if ('value' in props) {
      return { value: props.value };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue
    };

    this.handleClearInput = this.handleClearInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate = shouldComponentUpdateLodash;

  getCrossRendererProps(value, disableCross, searchLoading) {
    // handle numeric types
    if (disableCross || !hasValue(value) || searchLoading) {
      return {};
    }
    const { size } = this.props;
    let iconSize = sizeIconSizeMap[size];
    if (iconSize !== 0 && !iconSize) {
      iconSize = sizeIconSizeMap.default;
    }
    if (value === 0 || value) {
      return {
        suffix: (
          <StyledFontIcon
            onClick={this.handleClearInput}
            color='black'
            type='icon-Cross'
            size={iconSize}
          />
        )
      };
    }
    return {};
  }

  getSuffixRendererProps(
    suffixRenderer,
    searchLoading,
    showSearch,
    value,
    disableCross
  ) {
    if (suffixRenderer) {
      const Renderer = renderersMap.suffixRenders[suffixRenderer];
      return {
        suffix: <Renderer showSearch={showSearch} loading={searchLoading} />
      };
    }
    return {};
  }

  handleChange(e) {
    const { onChange } = this.props;
    if (!('value' in this.props)) {
      this.setState({ value: safeGet(e, ['target', 'value']) });
    }
    onChange && onChange(e);
  }

  handleClearInput(e) {
    e.stopPropagation();
    e.preventDefault();
    const alteredEvent = {
      ...e,
      target: {
        ...e.target,
        value: ''
      }
    };
    this.handleChange(alteredEvent);
  }

  // to be called using ref
  clearInput() {
    this.setState({ value: '' });
  }

  render() {
    const {
      suffixRenderer,
      searchLoading,
      showSearch,
      disableCross,
      ...rest
    } = this.props;
    const { value = '' } = this.state;
    const crossRendererProps = this.getCrossRendererProps(
      value,
      disableCross,
      searchLoading
    );
    const suffixRendererProps = this.getSuffixRendererProps(
      suffixRenderer,
      searchLoading,
      showSearch,
      value,
      disableCross
    );
    return (
      <StyledInput
        suffix=''
        {...rest}
        {...suffixRendererProps}
        {...crossRendererProps}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

TuxedoInput.displayName = 'Input';

TuxedoInput.propTypes = {
  ...Input.propTypes,
  /**
   * kind of renderer to display for suffix
   */
  suffixRenderer: PropTypes.oneOf(Object.keys(renderersMap.suffixRenders)),
  /**
   * prop passed as loading prop of searchLoading renderer
   */
  searchLoading: PropTypes.bool,
  /**
   * prop passed as showSearch prop of searchLoading renderer
   */
  showSearch: PropTypes.bool,
  /**
   * function called with event object
   */
  onChange: PropTypes.func,
  /** disable cross when value is present */
  disableCross: PropTypes.bool
};

TuxedoInput.defaultProps = {
  disableCross: false,
  searchLoading: false
};

/**
 * USE "hoistNonReactStatics" when extending Antd components
 * hoistNonReactStatics(Target, Source);
 * Copies all static props from 'Source' element to 'Target' element.
 */
export default hoistNonReactStatics(TuxedoInput, Input);
