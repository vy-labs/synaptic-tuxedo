import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import styled from 'styled-components';
import { Carousel } from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import FlexBox from '../../atoms/flexbox';
import FontIcon from '../../atoms/font-icon';

const StyledCarousel = styled(Carousel)`
  .slick-track {
    margin-left: 0;
    margin-right: 0;
  }

  .slick-prev {
    left: -${themeGet('space.5')}px;
  }

  .slick-next {
    right: -${themeGet('space.5')}px;
  }

  .slick-prev,
  .slick-next {
    display: flex !important;
    justify-content: center;
    align-items: center;
    margin: 0;
    color: ${themeGet('colors.text.dark')};

    &.slick-disabled {
      color: ${themeGet('colors.text.light')};
      cursor: not-allowed;
    }

    &:before {
      content: '';
    }

    &:hover,
    &:focus {
      color: ${themeGet('colors.text.dark')};
      &.slick-disabled {
        color: ${themeGet('colors.text.light')};
      }
    }
  }

  .slick-dots {
    bottom: -${themeGet('space.4')}px;
    li {
      margin: 0 5px;
      button {
        background-color: ${themeGet('colors.grey.3')};
        opacity: 1;
        :before {
          content: '';
        }
      }
      &.slick-active {
        button {
          background-color: ${themeGet('colors.blue.6')};
          opacity: 1;
          width: 16px;
        }
      }
    }
  }
`;

const StyledArrow = styled.button``;

class TuxedoCarousel extends Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
  }

  getNextArrow() {
    return (
      <StyledArrow>
        <FontIcon type='icon-Right' size={2} />
      </StyledArrow>
    );
  }

  getPrevArrow() {
    return (
      <StyledArrow>
        <FontIcon type='icon-Left' size={2} />
      </StyledArrow>
    );
  }

  render() {
    const {
      arrows = false,
      dots,
      nextArrow = this.getNextArrow(),
      prevArrow = this.getPrevArrow(),
      ...restProps
    } = this.props;

    const containerProps = {};

    let carousel = (
      <StyledCarousel
        {...{ dots }}
        {...restProps}
        innerRef={this.carouselRef}
      />
    );

    if (arrows) {
      containerProps.px = 4;
      carousel = (
        <StyledCarousel
          {...restProps}
          {...{ dots }}
          arrows
          nextArrow={nextArrow}
          prevArrow={prevArrow}
          innerRef={this.carouselRef}
        />
      );
    }

    if (dots !== false) {
      containerProps.pb = 4;
    }

    return <FlexBox {...containerProps}>{carousel}</FlexBox>;
  }
}

TuxedoCarousel.propTypes = {
  ...Carousel.propTypes,
  arrows: PropTypes.bool,
  dots: PropTypes.any,
  nextArrow: PropTypes.func,
  prevArrow: PropTypes.func
};

export default hoistNonReactStatics(TuxedoCarousel, Carousel);
