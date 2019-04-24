import React, { Fragment } from 'react';
import { Histogram } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

const histogramData = [
  { from: 0, to: 91, bucket: 0, value: 890 },
  { from: 91, to: 182, bucket: 1, value: 246 },
  { from: 182, to: 273, bucket: 2, value: 77 },
  { from: 273, to: 364, bucket: 3, value: 30 },
  { from: 364, to: 455, bucket: 4, value: 20 },
  { from: 455, to: 546, bucket: 5, value: 14 },
  { from: 546, to: 637, bucket: 6, value: 7 },
  { from: 637, to: 728, bucket: 7, value: 9 },
  { from: 728, to: 819, bucket: 8, value: 3 },
  { from: 819, to: 910, bucket: 9, value: 5 }
];
function story() {
  return (
    <div>
      <div
        style={{
          width: '300px',
          margin: '12px 0'
        }}
      >
        <Histogram
          min={0}
          max={906}
          data={histogramData}
          config={{
            countKey: 'value'
          }}
          height={100}
        />
      </div>
    </div>
  );
}

export default withInfo({
  // propTablesExclude: [Box]
})(story);
