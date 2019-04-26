import { Menu } from 'antd';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import hoistNonReactStatics from 'hoist-non-react-statics';

// Hoisting before overriding
const StyledMenu = hoistNonReactStatics(
  styled(Menu)`
    &.ant-menu {
      padding: ${themeGet('space.0')}px;
    }
    &.ant-dropdown-menu {
      padding: ${themeGet('space.2')}px;
    }
  `,
  Menu
);

StyledMenu.Seperator = styled.hr`
  border-top-color: ${themeGet('colors.border.default')};
  margin-top: ${themeGet('space.2')}px;
  margin-bottom: ${themeGet('space.2')}px;
`;

StyledMenu.Static = styled(Menu.Item)`
  &:hover {
    background-color: transparent;
  }
`;

StyledMenu.Item = styled(Menu.Item)`
  ${props =>
    props.mode !== 'horizontal'
      ? `
      border-radius: ${themeGet('radii.1')(props)}px;
      font-weight: ${themeGet('fontWeights.semibold')(props)};
    `
      : ''}
`;

StyledMenu.Seperator.displayName = 'Menu.Seperator';
StyledMenu.Static.displayName = 'Menu.Static';
StyledMenu.Item.displayName = 'Menu.Item';
StyledMenu.displayName = 'Menu';
StyledMenu.propTypes = Menu.propTypes;

export default StyledMenu;
