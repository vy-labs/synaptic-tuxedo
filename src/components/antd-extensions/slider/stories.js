import React, { Component, Fragment } from 'react';
import { AntdSlider } from 'tuxedo';

const handleSliderChange = function() {
  console.log(arguments);
};

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

export default function story() {
  return (
    <Fragment>
      <AntdSlider defaultValue={'10'} disabled={false} onAfterChange={handleSliderChange} />
      <AntdSlider
        marks={marks}
        range
        defaultValue={[40, 60]}
        onAfterChange={handleSliderChange}
        onChange={console.log}
      />
      <AntdSlider
        range
        min={0}
        max={701}
        defaultValue={[40, 60]}
        onAfterChange={handleSliderChange}
      />
    </Fragment>
  );
}
