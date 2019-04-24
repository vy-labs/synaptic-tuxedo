import React, { Fragment } from 'react';
import { Status, Box } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <div>
      <Box my={3}>
        <Status />
      </Box>
      <Box my={3} width='250px'>
        <Status backGroundColor='green' color='red' status={30} />
      </Box>
      <Box my={3} width='150px'>
        <Status status={70} showTooltip={false} />
      </Box>
      <Box my={3}>
        <Status status={37} />
      </Box>
    </div>
  );
}

export default withInfo({
  propTablesExclude: [Box]
})(story);
