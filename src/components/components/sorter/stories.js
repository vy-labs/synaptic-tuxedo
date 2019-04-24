import React from 'react';
import { Box, Sorter } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <div>
      <Box py={4} width='100px'>
        <Sorter name='asc' direction='asc' />
      </Box>
      <Box py={4} width='100px'>
        <Sorter name='asc' direction='desc' />
      </Box>
      <Box py={4} width='100px'>
        <Sorter name='none' />
      </Box>
    </div>
  );
}

export default withInfo({
  propTablesExclude: [Box]
})(story);
