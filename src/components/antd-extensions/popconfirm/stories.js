import React from 'react';
import { Radio } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <Radio>Radio</Radio>
  );
}

export default withInfo({
  text: 'Wrapper over antd Radio, no extra props supported yet'
})(story);