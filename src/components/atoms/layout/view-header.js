import system from 'system-components';
import { themeGet } from 'styled-system';
import Box from 'tuxedo/components/atoms/box';

const ViewHeader = system(
  {
    is: Box,
    blacklist: ['fixed']
  },

  props => ({
    background: themeGet('colors.white')(props),
    boxShadow: themeGet('shadows.2')(props),
    zIndex: 2
  }),

  props => {
    if (props.fixed) {
      return {
        position: 'fixed',
        width: '100%',
        height: 'auto'
      };
    }

    return {};
  }
);

export default ViewHeader;
