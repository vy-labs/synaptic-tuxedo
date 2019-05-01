import React from 'react';
import { LinkText } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return <LinkText>  text link only style a text as a link, use { `<Anchor />` } to render 'a' tag </LinkText>
}

export default withInfo()(story);
