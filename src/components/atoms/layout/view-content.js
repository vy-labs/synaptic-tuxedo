import system from 'system-components';
import { themeGet } from 'styled-system';
import Box from 'tuxedo/components/atoms/box';

const ViewContent = system(
  {
    is: Box
  },
  {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden'
  }
);

export default ViewContent;
