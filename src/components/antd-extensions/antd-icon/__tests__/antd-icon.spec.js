import React from 'react';
import ReactDOM from 'react-dom';
import AntdIcon from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('Tuxedo_AntdExtensions - AntdIcon - Rendering', () => {
  it('Default', () => {
    const tree = renderWithTheme(<AntdIcon type='loading' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Variant light', () => {
    const tree = renderWithTheme(<AntdIcon type='loading' variant='light' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
