import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Text from 'tuxedo/components/atoms/text';

const LinkText = styled(Text)`
  color: ${themeGet('colors.text.blue')};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

LinkText.displayName = 'LinkText';

LinkText.propTypes = Text.propTypes;

export default LinkText;
