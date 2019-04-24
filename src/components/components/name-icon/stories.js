import React from 'react';
import { NameIcon } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return <NameIcon name='Sudheer' color='red' size='large' />;
}

export default withInfo()(story);
