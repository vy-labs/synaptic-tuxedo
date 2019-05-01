import React, { Component, Fragment } from 'react';
import { Skeleton, FlexBox } from 'tuxedo';

export default function story() {
  return (
    <Fragment>
      <Skeleton
        animated
        paragarph={{ rows: 3 }}
      />
    </Fragment>
  );
}
