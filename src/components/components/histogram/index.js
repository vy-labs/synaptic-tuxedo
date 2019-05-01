import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Box from 'tuxedo/components/atoms/box';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import Tooltip from 'tuxedo/components/antd-extensions/tooltip';

const StyledHistogramColumn = styled(FlexBox)`
  height: 100%;
  &:hover {
    border-left: 1px solid ${themeGet('colors.border.hover')};
    border-right: 1px solid ${themeGet('colors.border.hover')};
  }
`;
const StyledHistogramColumnInner = styled.div`
  background-color: ${themeGet('colors.blue.1')};
`;

class Histogram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
    };
    this.saveHistogramRef = this.saveHistogramRef.bind(this);
  }

  componentDidMount() {
    this.setState({
      width: this.histogramRef.getBoundingClientRect().width
    });
  }

  getColWidth(width, buckets) {
    return width / buckets;
  }

  getColHeight(count = 0, max, height) {
    return height * (count / max);
  }

  saveHistogramRef(ref) {
    this.histogramRef = ref;
  }

  render() {
    const { width } = this.state;
    const { height, min, max, data, config = {}, showTooltip } = this.props;
    const { countKey = 'count' } = config;
    const colWidth = this.getColWidth(width, data.length);
    const maxCount = data.reduce((a, b) => Math.max(a, b[countKey] || 0), 0);
    return (
      <div ref={this.saveHistogramRef}>
        <FlexBox style={{ height }} alignItems='flex-end'>
          {data.map((col, index) => {
            const colHeight = this.getColHeight(
              col[countKey],
              maxCount,
              height
            );
            const style = {
              height: colHeight,
              width: colWidth
            };
            const content = (
              <StyledHistogramColumnInner
                style={style}
                key={`${col[countKey]}_${index}_inner`}
              />
            );
            return showTooltip ? (
              <Tooltip
                placement='top'
                title={col[countKey]}
                key={`${col[countKey]}_${index}`}
              >
                <StyledHistogramColumn alignItems='flex-end'>
                  {content}
                </StyledHistogramColumn>
              </Tooltip>
            ) : (
              content
            );
          })}
        </FlexBox>
      </div>
    );
  }
}

Histogram.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  data: PropTypes.array,
  height: PropTypes.number,
  showTooltip: PropTypes.bool,
  config: PropTypes.shape({
    countKey: PropTypes.string
  })
};

Histogram.defaultProps = {
  min: 0,
  height: 50,
  // Only for display.
  config: {
    countKey: 'count'
  },
  showTooltip: false
};

export default Histogram;
