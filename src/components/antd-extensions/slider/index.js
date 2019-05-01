import { Slider } from 'antd';
import { themeGet } from 'styled-system';
import styled from 'styled-components';
import hoistNonReactStatics from 'hoist-non-react-statics';

const StyledSlider = styled(Slider)`
  .ant-slider-mark-text {
    color: ${themeGet('colors.text.light')};
  }

  .ant-slider-mark-text-active {
    color: ${themeGet('colors.text.light')};
    font-weight: ${themeGet('fontWeights.semibold')};
  }
`;

StyledSlider.displayName = 'Slider';

export default hoistNonReactStatics(StyledSlider, Slider);
