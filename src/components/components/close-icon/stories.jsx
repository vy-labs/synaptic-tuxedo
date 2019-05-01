import React, { Fragment } from 'react';
import { CloseIcon, FlexBox, Text } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <FlexBox
      flexDirection='column'
      justifyContent='space-around'
      alignItems='center'
      height='150px'
    >
      <CloseIcon onClick={console.log} />
      <CloseIcon color='red' size={9} />
    </FlexBox>
  );
}

export default withInfo({
  text: 'Close Icon to be used across platform'
})(story);
