import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('Tuxedo_AntdExtensions - Button - Rendering', () => {
  it('Default Button', () => {
    const tree = renderWithTheme(<Button>Tuxedo button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Primary Button', () => {
    const tree = renderWithTheme(<Button type='primary'>Tuxedo button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
