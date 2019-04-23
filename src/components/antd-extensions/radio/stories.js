import React from 'react';
import { Radio } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <Radio.Group value={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
}

export default withInfo({
  text: 'Wrapper over antd Radio, no extra props supported yet'
})(story);
