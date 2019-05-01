import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntdSlider from 'tuxedo/components/antd-extensions/slider';

/**
 * Wrapper over ANT-D slider
 *  - Resolves onAfterChange multiple firing bug.
 *  - ***Follow ANTD API documentation***
 */
class Slider extends Component {
  constructor(props) {
    super(props);
    const sliderValue = props.range ? [0, 0] : 0;
    const prevValue = props.range ? [0, 0] : 0;
    this.state = {
      sliderValue,
      prevValue
    };
    this.handleAfterChange = this.handleAfterChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { value, defaultValue } = this.props;
    if (value || defaultValue) {
      this.setState({
        sliderValue: value || defaultValue
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { sliderValue = '' } = this.state;
    const { value: nextPropsValue = '' } = nextProps;
    if (sliderValue.toString() !== nextPropsValue.toString()) {
      this.setState({
        sliderValue: nextPropsValue
      });
    }
  }

  handleAfterChange(value) {
    const { onAfterChange } = this.props;
    const { prevValue } = this.state;

    if (prevValue.toString() !== value.toString()) {
      onAfterChange && onAfterChange(value);
      this.setState({ prevValue: value });
    }
  }

  handleChange(sliderValue) {
    const { onChange } = this.props;
    this.setState({ sliderValue });
    onChange && onChange(sliderValue);
  }

  render() {
    const { value, onChange, ...restProps } = this.props;
    const { sliderValue } = this.state;

    return (
      <AntdSlider
        {...restProps}
        value={sliderValue}
        onAfterChange={this.handleAfterChange}
        onChange={this.handleChange}
      />
    );
  }
}

/**
 * FOLLOW ANTD API
 */
Slider.propTypes = {
  /** Follow ANTD API documentation */
  range: PropTypes.bool,

  /** Follow ANTD API documentation */
  value: PropTypes.any,

  /** Follow ANTD API documentation */
  defaultValue: PropTypes.any,

  /** Follow ANTD API documentation */
  onAfterChange: PropTypes.func,

  /** Follow ANTD API documentation */
  onChange: PropTypes.func
};

export default Slider;
