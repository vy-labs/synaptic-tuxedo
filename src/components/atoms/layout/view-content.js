import system from 'system-components';
import { themeGet } from 'styled-system';

// Tuxedo imports
import Box from '../box';

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
