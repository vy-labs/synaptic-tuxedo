import React from 'react';
import renderer from 'react-test-renderer';
import Svg from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('<Atoms - Svg> - Rendering', () => {
  it('Renders a Svg element of height and width 0', () => {
    const tree = renderWithTheme(
      <Svg size={0}>Test</Svg>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a Svg element of height.. width will be equal to height and vice versa', () => {
    const tree = renderWithTheme(
      <Svg height={3}>Test</Svg>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('Renders a Svg element of height and width', () => {
    const tree = renderWithTheme(
      <Svg height={3} width={4}>Test</Svg>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a Svg element of with space props', () => {
    const tree = renderWithTheme(
      <Svg size={1} mr={2}>Test</Svg>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
