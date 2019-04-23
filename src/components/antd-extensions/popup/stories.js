import React, { Component, Fragment } from 'react';
import { Popup, Box } from 'tuxedo';

export default function story() {
  return (
    <Fragment>
      <Box>
        <Popup>
          <Popup.Header>Popup Heading</Popup.Header>
        </Popup>
      </Box>
    </Fragment>
  );
}
