import React, { Component, Fragment } from 'react';
import { GroupedMultiSelect, FlexBox, Box } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

const data = new Array(10).fill().map((val, ind) => ({
  header: {
    name: `header ${ind}`
  },
  options: new Array(7).fill().map((val, ind2) => ({
    value: ind * 10 + ind2,
    label: `somevalue${ind * 10 + ind2}`
  }))
}));

function story() {
  return (
    <FlexBox flexDirection='column'>
      <Box my={5}>
        <GroupedMultiSelect
          data={data}
          onApply={console.log}
          onCancel={console.log}
          onChange={console.log}
          value={[11]}
          noOfColumns={2}
          headerLabelKey='name'
        />
      </Box>
    </FlexBox>
  );
}

export default withInfo({
  propTablesExclude: [Box, FlexBox]
})(story);
