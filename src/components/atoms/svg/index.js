import system from 'system-components';
import { themeGet } from 'styled-system';

const SVGBase = system(
  {
    is: 'span',
    blacklist: ['size', 'fillColor']
  },

  props => {
    const {
      height: propHeight,
      width: propWidth,
      size: iconSize,
      fillColor: propsFillColor
    } = props;
    const themeHeights = themeGet('heights')(props);
    const themeIconSizes = themeGet('iconSizes')(props);
    let height = null;
    let width = null;

    if (iconSize !== undefined) {
      height = `${themeIconSizes[iconSize]}px`;
      width = height;
    } else {
      height = themeHeights[propHeight] ? `${themeHeights[propHeight]}px` : propHeight;
      width = propWidth || height;
    }

    const returnObj = {
      display: 'inline-block',
      i: {
        display: 'flex',
        height,
        width,
        svg : {
          height,
          width,
          ...propsFillColor && {
            'path[fill], g[fill]': {
              fill: themeGet(`colors.${propsFillColor}`)(props)
            }
          }
        }
      }
    };
    return returnObj;
  },

  'space',
  'height',
  'width',
  'maxWidth',
  'maxHeight'
);

SVGBase.displayName = 'SVG';

export default SVGBase;
