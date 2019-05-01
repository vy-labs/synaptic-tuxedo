import React, { Fragment } from 'react';
import { Ellipsis } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
      <Ellipsis width={350}>Use this component for overlfow ellipsis. This is a long text</Ellipsis>
  );
}

export default withInfo({
  text: 'Truncate text with ellipsis on overflow'
})(story);
