import system from 'system-components';
import { themeGet } from 'styled-system';
import PropTypes from 'prop-types';

/** text component */
const Text = system(
  {
    is: 'span',
    blacklist: ['fontWeight', 'textStyle']
  },
  props =>
    props.color
      ? {
          color: themeGet(`colors.text.${props.color}`)(props)
        }
      : {},
  'space',
  'fontSize',
  'fontWeight',
  'textStyle'
);

Text.displayName = 'Text';

Text.propTypes = {
  ...Text.propTypes,
  /** color of the text */
  color: PropTypes.oneOf([
    'dark',
    'medium',
    'light',
    'red',
    'blue',
    'green',
    'yellow',
    'disabled',
    'white'
  ])
};

export default Text;
