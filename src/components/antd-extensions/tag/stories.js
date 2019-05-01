import React from 'react';
import { Tag } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function handleChange(value) {
  console.log(`selected ${value}`);
}

function story() {
  return (
    <Tag closable onClose={console.log}>Tag</Tag>
  );
}

export default withInfo({
  text: 'Wrapper over antd Tag, no extra props supported yet'
})(story);