import React from 'react';
import renderer from 'react-test-renderer';
import View from '../view.js';
import ViewHeader from '../view-header.js';
import ViewContent from '../view-content.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('<Atoms - Layout> - Rendering', () => {
  it('Renders a View element', () => {
    const tree = renderWithTheme(
      <View>
        Synaptic FlexBox render test
      </View>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a View dark and ViewHeader fixed element', () => {
    const tree = renderWithTheme(
      <View variant='dark'>
        <ViewHeader fixed>View Header</ViewHeader>
      </View>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a View, ViewHeader and ViewContent element', () => {
    const tree = renderWithTheme(
      <View>
        <ViewHeader>View Header</ViewHeader>
        <ViewContent>View content</ViewContent>
      </View>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
