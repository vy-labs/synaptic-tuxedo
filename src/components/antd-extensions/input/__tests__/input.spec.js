import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import * as TestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Input from '../index.js';
import 'jest-styled-components';
import { renderWithTheme } from 'tuxedo/utils/jestUtils';

describe('Tuxedo_AntdExtensions - Input - Rendering', () => {
  it('Renders correctly', () => {
    const tree = renderWithTheme(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('SuffixRenderer - searchLoading', () => {
    const tree = renderWithTheme(
      <Input suffixRenderer='loadingSearch' searchLoading />
    );
    const testInstance = tree.getInstance();
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('SuffixRenderer without searchLoading', () => {
    const tree = renderWithTheme(
      <Input suffixRenderer='loadingSearch' />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('SuffixRenderer with showSearch', () => {
    const tree = renderWithTheme(
      <Input suffixRenderer='loadingSearch' showSearch />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render cross', () => {
    const tree = renderWithTheme(<Input value='1234' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should not render cross', () => {
    const tree = renderWithTheme(<Input value='1234' disableCross />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Tuxedo_AntdExtensions - Input - interactions', () => {
  it('Input Uncontrolled', () => {
    /**
     * Uncontrolled Input
     * - Change fired should change html input value
     * - Cross click should remove
     */

    const wrapper = mount(<Input />);
    /**
     * Changing input value
     */
    wrapper.find('input').simulate('change', { target: { value: '111' } });
    // Value of html input field should have changed
    expect(wrapper.find('input').prop('value')).toBe('111');

    /**
     * Cross click empties input
     */
    const crossElement = wrapper.find(Input).find('.icon-Cross');
    crossElement.first().simulate('click');
    expect(wrapper.find('input').prop('value')).toBe('');
  });

  it('Input Uncontrolled with onchange', () => {
    /**
     * Uncontrolled Input - with onchange
     * - Change fired should change html input value
     * - Should update Demo state value
     * - Cross click should remove - input and Demo state value
     */

    class Demo extends React.Component {
      constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
      }

      onSearch(event) {
        this.setState({
          inputVal: event.target.value
        });
      }

      render() {
        return <Input placeholder='Basic usage' onChange={this.onSearch} />;
      }
    }

    const wrapper = mount(<Demo />);
    /**
     * Changing input value
     */
    wrapper.find('input').simulate('change', { target: { value: '111' } });
    // Value of html input field should have changed
    expect(wrapper.find('input').prop('value')).toBe('111');
    // Demo state value should have changed
    expect(wrapper.state('inputVal')).toBe('111');

    /**
     * Cross click empties input
     */

    // Simulate Cross click
    const crossElement = wrapper.find(Input).find('.icon-Cross');
    crossElement.first().simulate('click');

    // Html input value should be ''
    expect(wrapper.find('input').prop('value')).toBe('');
    // Demo state value should be ''
    expect(wrapper.state('inputVal')).toBe('');
  });

  it('Input Controlled', () => {
    /**
     * Controlled Input
     * - Change fired should change html input value
     * - Should update Demo state value
     * - Cross click should remove - input and Demo state value
     */
    class Demo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          inputVal: '1234'
        };

        this.onSearch = this.onSearch.bind(this);
      }

      onSearch(event) {
        this.setState({
          inputVal: event.target.value
        });
      }

      render() {
        const { inputVal } = this.state;
        return (
          <Input
            placeholder='Basic usage'
            value={inputVal}
            onChange={this.onSearch}
          />
        );
      }
    }

    const wrapper = mount(<Demo />);

    /**
     * Changing input value
     */
    wrapper.find('input').simulate('change', { target: { value: '111' } });
    // Value of html input field should have changed
    expect(wrapper.find('input').prop('value')).toBe('111');
    // React Input prop value should have changed
    expect(wrapper.find(Input).prop('value')).toBe('111');

    /**
     * Cross click empties input
     */

    // Simulate Cross click
    const crossElement = wrapper.find(Input).find('.icon-Cross');
    crossElement.first().simulate('click');

    // Html input value should be ''
    expect(wrapper.find('input').prop('value')).toBe('');
    // Demo Input prop value should be ''
    expect(wrapper.find(Input).prop('value')).toBe('');
  });

  it('Input Controlled - with non updating onChange', () => {
    /**
     * Controlled Input - onChange either not provided or not updating state value
     * - Change fired should NOT change html input value
     * - Should NOT update Demo state value
     * - Cross click should NOT remove - input and Demo state value
     */
    class Demo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          inputVal: '1234'
        };
      }

      render() {
        const { inputVal } = this.state;
        return <Input placeholder='Basic usage' value={inputVal} />;
      }
    }

    const wrapper = mount(<Demo />);

    /**
     * Changing input value
     */
    wrapper.find('input').simulate('change', { target: { value: '111' } });
    // Value of html input field should have changed
    expect(wrapper.find('input').prop('value')).toBe('1234');
    // React Input prop value should have changed
    expect(wrapper.find(Input).prop('value')).toBe('1234');

    /**
     * Cross click empties input
     */

    // Simulate Cross click
    const crossElement = wrapper.find(Input).find('.icon-Cross');
    crossElement.first().simulate('click');

    // Html input value should be ''
    expect(wrapper.find('input').prop('value')).toBe('1234');
    // Demo Input prop value should be ''
    expect(wrapper.find(Input).prop('value')).toBe('1234');
  });
});
