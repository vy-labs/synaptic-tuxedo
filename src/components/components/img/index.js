import system from 'system-components';
import React, { Component } from 'react';
import { themeGet } from 'styled-system';
import PropTypes from 'prop-types';
import hasValue from 'tuxedo/utils/hasValue';
import blink from 'tuxedo/keyframes/blink';
import FlexBox from 'tuxedo/components/atoms/flexbox';
import NameIcon from 'tuxedo/components/components/name-icon';

const StyledImg = system(
  {
    is: 'img'
  },

  props => {
    const { loading } = props;
    return (
      loading &&
      `
      background-color: ${themeGet('colors.grey.6')(props)};
      animation: ${blink} 2s ease-in-out 0s infinite;
    `
    );
  },

  {
    maxWidth: '100%',
    height: 'auto'
  },

  'space',
  'width',
  'height',
  'borderRadius',
  'display'
);

/**
 * Image component to show a name icon on image error
 */
export default class Img extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
      loading: true
    };

    this.onError = this.onError.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  onError() {
    const { isError } = this.state;
    if (isError === false) {
      // Prevent infinite loop
      this.setState({
        isError: true,
        loading: false
      });
    }
  }

  onLoad() {
    this.setState({ loading: false });
  }

  render() {
    // We can configure the img component to show a name icon on image error
    // by passing alt as an object
    const { altIcon, showLoading, src, ...restProps } = this.props;
    const { isError, loading } = this.state;
    const conditionalProps = {};
    if (showLoading) {
      conditionalProps.onLoad = this.onLoad;
    }

    if ((isError && !loading) || !src) {
      if (typeof altIcon === 'object') {
        return (
          <FlexBox inline {...restProps}>
            <NameIcon
              size={altIcon.size}
              name={altIcon.name}
              color={altIcon.color}
            />
          </FlexBox>
        );
      }
    }

    return (
      <StyledImg
        {...restProps}
        src={src}
        loading={loading && showLoading}
        onError={this.onError}
        {...conditionalProps}
      />
    );
  }
}

Img.propTypes = {
  /**
   * An object to help img render name icon in case of error
   */
  altIcon: PropTypes.shape({
    size: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string
  }),
  showLoading: PropTypes.bool,
  src: PropTypes.string
};
