import { Radio } from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const TuxRadio = styled(Radio)`
  font-weight: ${themeGet('fontWeights.semibold')};
  &:last-child {
    margin-right: 0;
  }
`;

export default hoistNonReactStatics(TuxRadio, Radio);
