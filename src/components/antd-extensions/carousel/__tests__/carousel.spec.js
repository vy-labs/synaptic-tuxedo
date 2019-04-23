import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('Tuxedo_AntdExtensions - Carousel - Rendering', () => {
  it('Renders correctly', () => {
    const tree = renderWithTheme(
      <Carousel>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
