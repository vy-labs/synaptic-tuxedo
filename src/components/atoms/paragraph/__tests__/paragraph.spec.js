import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('<Atoms - Paragraph> - Rendering', () => {
  it('Renders a Paragraph element', () => {
    const tree = renderWithTheme(
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Paragraph>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a ParaGraph with fontSize 1', () => {
    const tree = renderWithTheme(
      <Paragraph fontSize={1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Paragraph>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a ParaGraph with fontSize 0', () => {
    const tree = renderWithTheme(
      <Paragraph fontSize={0}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Paragraph>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
