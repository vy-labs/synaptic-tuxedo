import React from 'react';
import renderer from 'react-test-renderer';
import Mono from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('<Atoms - Mono> - Rendering', () => {
  it('Renders a Mono element', () => {
    const tree = renderWithTheme(
      <Mono>
        Synaptic FlexBox render test
      </Mono>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
