import React, { Fragment } from 'react';
import { Switch, FlexBox } from 'tuxedo';

export default function story() {
  return (
    <FlexBox>
      <Switch checkedChildren="0" unCheckedChildren="1" defaultChecked />
    </FlexBox>
  );
}
