import React from 'react';
import { Button } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <div>
      <Button>Button</Button>
      <Button type='primary'> Primary button </Button>
    </div>
  )
}

export default withInfo({
  text: 'wrapper over antD buttoon, no extra props supported for now'
})(story);
