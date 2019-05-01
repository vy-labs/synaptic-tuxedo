import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Heading from '../index.js';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('Tuxedo_Atoms - Heading', () => {
  it('Default Md', () => {
    const tree = renderWithTheme(<Heading>Heading text</Heading>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Large', () => {
    const tree = renderWithTheme(
        <Heading variant='lg'>Heading text</Heading>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Extra Large', () => {
    const tree = renderWithTheme(
        <Heading variant='xl'>Heading text</Heading>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
