import React from 'react';
import { Img, FlexBox } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  const altIcon = {
    name: 'google',
    size: 'large',
    color: 'red'
  };
  return (
    <FlexBox flexDirection='column' alignItems='center'>
      <Img
        src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        altIcon={altIcon}
      />
      <Img
        src='https://www.google.com/images/branding/googlelogo/2x/goodsfasdfadsglelogo_color_272x92dp.png'
        altIcon={altIcon}
      />
    </FlexBox>
  );
}

export default withInfo({
  propTablesExclude: [FlexBox]
})(story);
