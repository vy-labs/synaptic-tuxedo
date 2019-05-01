import React from 'react';
import renderer from 'react-test-renderer';
import FlexBox from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('<Atoms - FlexBox> - Rendering', () => {
  it('Renders a FlexBox element', () => {
    const tree = renderWithTheme(<FlexBox>Synaptic FlexBox render test</FlexBox>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('Inline support', () => {
    const tree = renderWithTheme(
        <FlexBox inline>
          Synaptic FlexBox render test
        </FlexBox>
      )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('FlexWrap and flexDirection support', () => {
    const tree = renderWithTheme(
        <FlexBox flexWrap='wrap' flexDirection='column'>
          Synaptic FlexBox render test
        </FlexBox>
      )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('alignItems and justifyContent support', () => {
    const tree = renderWithTheme(
        <FlexBox justifyContent='center' alignItems='center'>
          Synaptic FlexBox render test
        </FlexBox>
      )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('flexBasis and alignContent support', () => {
    const tree = renderWithTheme(
        <FlexBox alignContent='flex-start' flexBasis='auto'>
          Synaptic FlexBox render test
        </FlexBox>
      )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('Flex support', () => {
    const tree = renderWithTheme(
        <FlexBox flex={1}>
          Synaptic FlexBox render test
        </FlexBox>
      )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
