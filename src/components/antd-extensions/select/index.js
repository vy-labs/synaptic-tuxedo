import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { Select } from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';

const StyledSelect = styled(Select)`
  .ant-select-selection {
    border-color: ${themeGet('colors.border.input')};
  }
  .ant-select-selection-selected-value {
    font-weight: ${themeGet('fontWeights.semibold')};
  }

  ${props => {
    const { size } = props;

    if (size === 'small') {
      return `
        .ant-select-selection-selected-value {
          font-size: ${themeGet('fontSizes.1')(props)}px;
        }
      `;
    }

    return null;
  }}
`;

export default hoistNonReactStatics(StyledSelect, Select);
