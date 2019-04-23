import React from 'react';
import { Select } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function handleChange(value) {
  console.log(`selected ${value}`);
}

function story() {
  return (
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Select.Option value="jack">Jack</Select.Option>
      <Select.Option value="lucy">Lucy</Select.Option>
      <Select.Option value="disabled" disabled>Disabled</Select.Option>
      <Select.Option value="Yiminghe">yiminghe</Select.Option>
    </Select>
  );
}

export default withInfo({
  text: 'Wrapper over antd Select, no extra props supported yet'
})(story);