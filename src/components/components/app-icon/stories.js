import React, { Fragment } from 'react';
import { FlexBox, AppIcon } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  const icon =
    '//lh3.googleusercontent.com/BQnvuZR500pg2ulvv3FBmRI93ODz3AjNfbz92hCieuJLvmbGY36AKhETMTTfTDgpPQI=w300';

  return (
    <FlexBox>
      <AppIcon src={icon} width='15px' />
      <AppIcon src={icon} width='32px' ml={3} />
    </FlexBox>
  );
}

export default withInfo({
  propTablesExclude: [FlexBox]
})(story);
