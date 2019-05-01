import React from 'react';
import { render } from 'enzyme';
import Menu from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('Tuxedo_AntdExtensions - Menu - Rendering', () => {
  it('Default Menu', () => {
    const tree = renderWithTheme(
      <Menu>
        <Menu.Item key="mail">
          Navigation One
        </Menu.Item>
        <Menu.Item key="test">
          Navigation test
        </Menu.Item>
        <Menu.Item key="app" disabled>
          Navigation Two
        </Menu.Item>
      </Menu>
    );
    expect(tree).toMatchSnapshot();
  });
});
