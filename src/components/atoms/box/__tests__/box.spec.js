import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('<Atoms - Box> - Rendering', () => {
  it('Renders a div element', () => {
    const tree = renderWithTheme(<Box>Synaptic box render test</Box>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Space support', () => {
    const tree = renderWithTheme(<Box mr={1} ml={1} mt={1} mb={1}>Synaptic box render test</Box>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Width support', () => {
    const tree = renderWithTheme(
          <Box
            width={100}
            maxWidth={200}
            minWidth={50}
          >
            Synaptic box render test
          </Box>
        )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Height support', () => {
    const tree = renderWithTheme(
          <Box
            height={100}
            maxHeight={200}
            minHeight={50}
          >
            Synaptic box render test
          </Box>
        )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Position support', () => {
    const tree = renderWithTheme(
          <Box
            position='absolute'
          >
            Synaptic box render test
          </Box>
        )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Display support', () => {
    const tree = renderWithTheme(
          <Box
            display='block'
          >
            Synaptic box render test
          </Box>
        )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Flex support', () => {
    const tree = renderWithTheme(
          <Box
            flex={1}
          >
            Synaptic box render test
          </Box>
        )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
