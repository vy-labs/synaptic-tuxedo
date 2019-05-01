import React, { Component, Fragment } from 'react';
import { Heading, FlexBox, Box } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <div>
      <Box p={3}>
        <Heading variant='lg'>
          LG Heading
        </Heading>
      </Box>
      <Box p={3}>
        <Heading variant='md'>
          MD Heading
        </Heading>
      </Box>
    </div>
  );
}

export default withInfo({
  propTablesExclude: [Box]
})(story);
