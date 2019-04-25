import React, { Fragment } from 'react';
import { Chip, FlexBox } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <FlexBox>
      <Chip type='primary'>APPL</Chip>
      <Chip type='secondary' ml={2}>
        APPL
      </Chip>
      <Chip type='info' ml={2}>
        APPL
      </Chip>
      <Chip type='success' ml={2}>
        APPL
      </Chip>
    </FlexBox>
  );
}

export default withInfo({
  propTablesExclude: [FlexBox]
})(story);
