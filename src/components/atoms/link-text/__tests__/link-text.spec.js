import React from 'react';
import renderer from 'react-test-renderer';
import LinkText from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('<Atoms - LinkText> - Rendering', () => {
  it('Renders a LinkText element', () => {
    const tree = renderWithTheme(
      <LinkText>
        Synaptic FlexBox render test
      </LinkText>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
