import React, { Fragment } from 'react';
import { Text, Box } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <div>
      <Box>
        <Text>Normal Text - 400</Text>
      </Box>
      <Box>
        <Text fontWeight='semibold'>Semibold text - 500</Text>
      </Box>
      <Box>
        <Text fontWeight='bold'>Bold Text - 700</Text>
      </Box>
      <Box mt={3}>
        <Text fontSize={5}>FontSize - 5</Text>
      </Box>
      <Box mt={3}>
        <Text color='green'>Green text</Text>
      </Box>
    </div>
  );
}

export default withInfo({
  propTablesExclude: [Box]
})(story);

