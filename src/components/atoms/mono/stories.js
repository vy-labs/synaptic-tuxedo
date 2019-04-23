import React, { Fragment } from 'react';
import { Mono } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <div>
      <p><Mono>This is a mono space text</Mono></p>
      <p>You can use this to style number: <Mono>0.333</Mono></p>
      <p>Green Number: <Mono color='green'>0.333</Mono></p>
      <p>Red Number: <Mono color='red'>0.333</Mono></p>
    </div>
  );
}

export default withInfo({
  text: 'Component to generate text in mono font'
})(story);
