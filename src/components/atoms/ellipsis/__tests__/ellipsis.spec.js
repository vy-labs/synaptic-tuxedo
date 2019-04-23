import React from 'react';
import renderer from 'react-test-renderer';
import Ellipsis from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('<Atoms - Ellipsis> - Rendering', () => {
  it('Renders a span element', () => {
    const tree = renderWithTheme(<Ellipsis>Synaptic Ellipsis render test</Ellipsis>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Space support', () => {
    const tree = renderWithTheme(<Ellipsis mr={1} ml={1} mt={1} mb={1}>Synaptic Ellipsis render test</Ellipsis>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Width support', () => {
    const tree = renderWithTheme(
          <Ellipsis
            width={100}
            maxWidth={200}
            minWidth={50}
          >
            Synaptic Ellipsis render test
          </Ellipsis>
        )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('TextAlign support', () => {
    const tree = renderWithTheme(
          <Ellipsis
            textAlign='center'
          >
            Synaptic Ellipsis render test
          </Ellipsis>
        )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
