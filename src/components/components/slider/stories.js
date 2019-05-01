import React, { Fragment } from 'react';
import { Slider } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

const handleSliderChange = function() {
  console.log(arguments);
};

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50'
    },
    label: <strong>100°C</strong>
  }
};

function story() {
  return (
    <div>
      <Slider
        defaultValue={10}
        disabled={false}
        onAfterChange={handleSliderChange}
      />
      <Slider
        marks={marks}
        range
        defaultValue={[40, 60]}
        onAfterChange={handleSliderChange}
        onChange={console.log}
      />
      <Slider
        range
        min={0}
        max={701}
        defaultValue={[40, 60]}
        onAfterChange={handleSliderChange}
      />
    </div>
  );
}

export default withInfo({
  // propTablesExclude: [Box]
})(story);
