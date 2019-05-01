import { Button } from 'antd';
import { themeGet } from 'styled-system';
import styled from 'styled-components';
import hoistNonReactStatics from 'hoist-non-react-statics';

const StyledButton = styled(Button)`
  /** Most styled can be changed through input.antd.js, anything else can be placed here */
  box-shadow: none;
  font-weight: ${themeGet('fontWeights.semibold')};
  line-height: initial;
  ${props =>
    props.type === 'default' || !props.type
      ? `
    &:hover:not(['disabled']) {
      background-color: ${themeGet('colors.grey.1')(props)};
      border-color: ${themeGet('colors.border.hover')(props)};
      color: ${themeGet('colors.text.dark')(props)};
    }`
      : ''}

  ${props =>
    props.type === 'primary'
      ? `
    &.ant-btn-primary:hover:not(['disabled']) {
      background-color: ${themeGet('colors.blue.7')(props)};
      border-color: ${themeGet('colors.blue.7')(props)};
      color: ${themeGet('colors.white')(props)};
    }`
      : ''}
`;

StyledButton.displayName = 'Button';
StyledButton.propTypes = Button.propTypes;

export default hoistNonReactStatics(StyledButton, Button);
