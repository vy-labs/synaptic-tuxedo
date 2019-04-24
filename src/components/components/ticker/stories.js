import React, { Fragment } from 'react';
import { Ticker, FlexBox } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <div>
      <FlexBox>
        <Ticker>APPL</Ticker>
        <Ticker clickable ml={5}>
          APPL
        </Ticker>
      </FlexBox>
      <FlexBox mt={4}>
        <Ticker size='big'>APPL</Ticker>
        <Ticker clickable size='big' ml={5}>
          APPL
        </Ticker>
      </FlexBox>
    </div>
  );
}

export default withInfo({
  propTablesExclude: [FlexBox]
})(story);
