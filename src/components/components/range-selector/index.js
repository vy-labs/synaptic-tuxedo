import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import Box from 'tuxedo/components/atoms/box';
import Histogram from 'tuxedo/components/components/histogram';
import Slider from 'tuxedo/components/components/slider';

/**
 * Range selector component.
 *  - Uses Slider and Histogram components from Tuxedo.
 *  - Slider is the base of this component. All props except 'histogram' are passed to slider component.
 */
class RangeSelector extends Component {
  constructor(props) {
    super(props);
    this.testFunction = this.testFunction.bind(this);
  }

  testFunction() {
    return null;
  }

  renderHistogram(props) {
    const { histogram = {}, min, max } = props;
    const { data } = histogram;
    if (!data || !data.length) {
      return null;
    }
    return <Histogram min={min} max={max} {...histogram} />;
  }

  renderSlider(props) {
    const { histogram, ...restProps } = props;
    return <Slider {...restProps} />;
  }

  render() {
    const histogramDOM = this.renderHistogram(this.props);
    const sliderDom = this.renderSlider(this.props);
    return (
      <Box>
        {histogramDOM ? (
          <Box mb='-18px' mx='6px'>
            {histogramDOM}
          </Box>
        ) : null}
        {sliderDom}
      </Box>
    );
  }
}

RangeSelector.defaultProps = {
  histogram: {}
};

RangeSelector.propTypes = {
  /** All props except 'histogram' are passed to SLIDER component */
  min: PropTypes.any.isRequired,
  max: PropTypes.any.isRequired,

  /** Passed to Histogram component */
  histogram: PropTypes.shape({
    height: PropTypes.any,
    data: PropTypes.array,
    config: PropTypes.object
  })
};

export default RangeSelector;
