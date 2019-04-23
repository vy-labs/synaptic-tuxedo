import React from 'react';
import { AntdIcon, Box } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <Box>
      <AntdIcon type='android' theme='filled' variant='light' />
      <AntdIcon type='left' theme='outlined' />
    </Box>
  );
}

export default withInfo({
  text: 'Icon extension of Antd supports props of antD Icons',
  propTablesExclude: [Box]
})(story);

