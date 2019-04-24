import React, { Fragment } from 'react';
import { RangeSelector, Histogram, Slider } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

const element = {
  key: 'word_count',
  label: 'Word Count',
  type: 'range_selector',
  histogram: [
    {
      from: 0,
      to: 9,
      bucket: 0,
      count: 0
    },
    {
      from: 9,
      to: 18,
      bucket: 1,
      count: 4
    },
    {
      from: 18,
      to: 27,
      bucket: 2,
      count: 2
    },
    {
      from: 27,
      to: 36,
      bucket: 3,
      count: 1
    },
    {
      from: 36,
      to: 45,
      bucket: 4,
      count: 0
    },
    {
      from: 45,
      to: 54,
      bucket: 5,
      count: 1
    },
    {
      from: 54,
      to: 63,
      bucket: 6,
      count: 0
    },
    {
      from: 63,
      to: 72,
      bucket: 7,
      count: 1
    },
    {
      from: 72,
      to: 81,
      bucket: 8,
      count: 0
    },
    {
      from: 81,
      to: 90,
      bucket: 9,
      count: 2
    }
  ],
  initial_state: [0, 86.0],
  default_value: '0,86.0',
  max_value: 86.0,
  min_value: 0,
  scale: 'linear',
  position: 'left'
};

const {
  max_value: max,
  min_value: min,
  histogram: histogramData = [],
  default_value: value
} = element;
const valStart = Number(value.split(',')[0]);
const valEnd = Number(value.split(',')[1] || '');
const marks = {
  [min]: min,
  [max]: max,
  [valStart]: valStart,
  [valEnd]: valEnd
};

function story() {
  return (
    <div>
      <RangeSelector
        range
        marks={marks}
        min={min}
        max={max}
        value={[valStart, valEnd]}
        onAfterChange={console.log}
        histogram={{
          height: 80,
          data: histogramData
        }}
      />
    </div>
  );
}

export default withInfo({
  propTables: [Histogram, Slider]
})(story);
