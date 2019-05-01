import styled from 'styled-components';
import { themeGet } from 'styled-system';
import system from 'system-components';

const Container = system(
  {
    is: 'div'
  },

  props => {
    return {
      position: 'fixed',
      borderRadius: `${themeGet('radii.1')(props)}px`,
      backgroundColor: themeGet('colors.white')(props),
      boxShadow: themeGet('shadows.3')(props),
      padding: `${themeGet('space.4')(props)}px`,
      zIndex: 1
    };
  },

  'width',
  'height',
  'left',
  'right',
  'top',
  'bottom'
);

const Header = styled.div`
  font-size: ${themeGet('fontSizes.3')}px;
  color: ${themeGet('colors.text.dark')};
  font-weight: ${themeGet('fontWeights.bold')};
`;

Container.Header = Header;

Container.displayName = 'Popup';

export default Container;
