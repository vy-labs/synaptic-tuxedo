import React from 'react';
import { Checkbox } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function story() {
  return (
    <React.Fragment>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <Checkbox checked='true' onChange={onChange} color='red'>Checkbox</Checkbox>
      <Checkbox onChange={onChange} color='green'>Checkbox</Checkbox>
    </React.Fragment>
  )
}

export default withInfo({
  text: 'Wrapper over antD checkbox. Currently no extra prop is supported'
})(story);
