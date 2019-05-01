import React from 'react';
import { FlexBox } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
      <FlexBox justifyContent='space-between'>
        <div>Flex 1</div>
        <div>Flex 1</div>
        <div>Flex 1</div>
      </FlexBox>
  );
}

export default withInfo({
  text: 'Component to style flexbox',
  propTables: [FlexBox]
})(story);
