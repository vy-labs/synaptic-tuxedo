import React from 'react';
import { FontIcon, Box } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';
import fontIconsDemo from './font-icons-demo';
import './story.less';

function story() {
  return (
    <Box
      className='font-icon-stories'
      dangerouslySetInnerHTML={{ __html: fontIconsDemo }}
    />
  );
}

export default withInfo({
  source: false,
  propTables: [FontIcon],
  propTablesExclude: [Box],
  text: `
  Synaptic Font Icons
  ~~~js
  <FontIcon type='icon-*' size={1} />
  ~~~
  `
})(story);
