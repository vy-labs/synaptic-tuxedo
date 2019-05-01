import React, { Component, Fragment } from 'react';
import ErrorMessage from './index';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <Fragment>
      <ErrorMessage variant='error' mb={2}>
        This is an error
      </ErrorMessage>
      <ErrorMessage variant='warn' mb={2}>
        This is an warning
      </ErrorMessage>
      <ErrorMessage variant='warn' justifyContent='center'>
        This is an center aligned warning
      </ErrorMessage>
    </Fragment>
  );
}

export default story;
