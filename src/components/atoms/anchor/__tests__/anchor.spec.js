import React from 'react';
import renderer from 'react-test-renderer';
import Anchor from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('Tuxedo_Atoms - Anchor', () => {
  it('Renders correctly', () => {
    const tree = renderWithTheme(<Anchor href='www.synaptic.io'>Synaptic</Anchor>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
