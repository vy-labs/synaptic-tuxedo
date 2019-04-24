import React, { Component, Fragment } from 'react';
import { Dot, FlexBox, Box } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <FlexBox flexDirection='column'>
      <Box my={5}>
        <Dot />
      </Box>
      <Box my={5}>
        <Dot color='red' />
      </Box>
    </FlexBox>
  );
}

export default withInfo({
  propTablesExclude: [Box, FlexBox]
})(story);
