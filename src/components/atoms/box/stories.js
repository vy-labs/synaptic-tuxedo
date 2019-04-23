import React from 'react';
import { Box } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <Box>Test</Box>
  );
}

export default withInfo({
  text: 'Box is a div alternate component in tuxedo',
  propTables: [Box]
})(story);
