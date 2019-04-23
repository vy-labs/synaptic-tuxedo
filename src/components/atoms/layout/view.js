import system from 'system-components';
import { themeGet } from 'styled-system';

// Tuxedo imports
import FlexBox from '../flexbox';

const View = system(
  {
    is: FlexBox,
    blacklist: ['justifyContent']
  },
  {
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  },
  props => ({
    background: (props.variant === 'dark') ? themeGet('colors.grey.1')(props) : 'transparent',
    fontFamily: themeGet('fonts.0')(props),
    color: props.color || themeGet('colors.text.dark')(props)
  })
);

export default View;
