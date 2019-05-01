import React, { Component, Fragment } from 'react';
import { Tooltip } from 'tuxedo';

export default function story() {
  return (
      <Tooltip title='Prompt text'>
        Hove over text to see tooltip
      </Tooltip>
  );
}
