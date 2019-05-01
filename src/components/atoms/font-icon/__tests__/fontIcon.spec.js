import React from 'react';
import renderer from 'react-test-renderer';
import FontIcon from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('<Atoms - FontIcon> - Rendering', () => {
  it('Type support', () => {
    const tree = renderWithTheme(<FontIcon type='icon-Logomark' />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('ClassName support', () => {
    const tree = renderWithTheme(
        <FontIcon
          className='temp-className'
          type='icon-Logomark'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Size and color support', () => {
    const tree = renderWithTheme(
        <FontIcon
          type='icon-Logomark'
          size={2}
          color='blue'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('OnClick support', () => {
    const tree = renderWithTheme(
        <FontIcon
          type='icon-Logomark'
          onClick={console.log}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
