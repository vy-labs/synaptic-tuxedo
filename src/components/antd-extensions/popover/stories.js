import React, { Component, Fragment } from 'react';
import { Popover, Box } from 'tuxedo';

export default function story() {
  return (
    <Fragment>
      <Box>
        <Popover placement="topLeft" title={'Title'} content={'testing'} trigger='click'>
          Align edge / 边缘对齐
        </Popover>
      </Box>
      <Box>
        <Popover placement="topLeft" title={'Title'} content={'testing'} arrowPointAtCenter>
          rrow points to center / 箭头指向中心
        </Popover>
      </Box>
    </Fragment>
  );
}
