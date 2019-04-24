import { themeGet } from 'styled-system';
import system from 'system-components';
import PropTypes from 'prop-types';

const getStylesByClickability = props => {
  if (props.clickable) {
    return {
      backgroundColor: themeGet('colors.blue.1')(props),
      color: themeGet('colors.text.blue')(props),
      cursor: 'pointer',

      '&:hover': {
        textDecoration: 'underline'
      }
    };
  } else {
    return {
      backgroundColor: themeGet('colors.grey.2')(props),
      color: themeGet('colors.text.dark')(props),
      cursor: 'default'
    };
  }
};

const getStylesBySize = props => {
  if (props.size === 'big') {
    return {
      fontSize: `${themeGet('fontSizes.2')(props)}px`,
      padding: `2px ${themeGet('space.1')(props)}px`
    };
  } else {
    return {
      fontSize: `${themeGet('fontSizes.1')(props)}px`,
      padding: `2px ${themeGet('space.1')(props)}px`
    };
  }
};

const Ticker = system(
  {
    is: 'span',
    blacklist: ['clickable']
  },

  props => {
    return {
      display: 'inline-block',
      borderRadius: `${themeGet('radii.1')(props)}px`,
      lineHeight: 'normal',

      ...getStylesByClickability(props),
      ...getStylesBySize(props)
    };
  },

  'space'
);

Ticker.propTypes = {
  ...Ticker.propTypes,
  clickable: PropTypes.bool,
  size: PropTypes.oneOf(['big'])
};

Ticker.displayName = 'Ticker';

export default Ticker;
