import React, { Fragment } from 'react';
import { Anchor } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <Anchor href='https://www.synaptic.com'>This anchor will take you to synaptic website</Anchor>
  );
}

export default withInfo()(story);
