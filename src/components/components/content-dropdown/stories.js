import React from 'react';
import { ContentDropdown, Box, CompareCalendar } from 'tuxedo';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <Box maxWidth='250px'>
      <ContentDropdown overlay={<CompareCalendar />}>
        <Box flex='1'>Test</Box>
      </ContentDropdown>
    </Box>
  );
}

export default withInfo({
  text: 'Extension of antd dropDown supports all the props of antd',
  propTables: [ContentDropdown],
  propTablesExclude: [Box]
})(story);
