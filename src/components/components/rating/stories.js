import React, { Component, Fragment } from 'react';
import { Rating, FlexBox, Box } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <FlexBox flexDirection='column'>
      <Box my={5}>
        <Rating rating={4} />
      </Box>
      <Box my={5}>
        <Rating mb={4} size={1} />
      </Box>
      <Box my={5}>
        <Rating max={10} rating={3} size={0} />
      </Box>
    </FlexBox>
  );
}

export default withInfo({
  propTablesExclude: [Box, FlexBox]
})(story);
