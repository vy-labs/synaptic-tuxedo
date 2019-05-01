import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('<Atoms - Text> - Rendering', () => {
  it('Renders a Text element', () => {
    const tree = renderWithTheme(
      <Text>
        Lorem Ipsum is simply dummy text.
      </Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Text colors', () => {
    const tree = renderWithTheme(
      <React.Fragment>
        {
          [
            'dark',
            'medium',
            'light',
            'red',
            'blue',
            'green',
            'yellow',
            'disabled',
            'white'
          ].map((color, index) => (
            <Text color={color} key={index}>
              Lorem Ipsum is simply dummy text.
            </Text>
          ))
        }
      </React.Fragment>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Text fontSize and fontWeight', () => {
    const tree = renderWithTheme(
      <Text
        fontSize={2}
        fontWeight='semibold'
      >
        Lorem Ipsum is simply dummy text.
      </Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
