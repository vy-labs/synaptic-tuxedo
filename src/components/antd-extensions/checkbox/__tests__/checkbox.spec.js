import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('Tuxedo_AntdExtensions - Checkbox - Rendering', () => {
  it('Default CheckBox', () => {
    const tree = renderWithTheme(
      <Checkbox>Checkbox</Checkbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('CheckBox - checked', () => {
    const tree = renderWithTheme(
      <Checkbox checked>Checkbox</Checkbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('CheckBox - hideInnerTick', () => {
    const tree = renderWithTheme(
      <Checkbox hideInnerTick>HideInnerTick</Checkbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('CheckBox - color hash', () => {
    const tree = renderWithTheme(
      <Checkbox color='#63AEFF'>Color hash</Checkbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
