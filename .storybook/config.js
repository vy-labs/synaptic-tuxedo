import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Provider from '../src/provider';
import { getWithInfoStyles } from './utils/stylingUtils';

// import Table from './components/table';
import { setDefaults } from '@storybook/addon-info';

function loadStories() {
  require('tuxedo/components/atoms/stories.js');
  require('tuxedo/components/antd-extensions/stories.js');
  require('tuxedo/components/components/stories.js');
}

// addDecorator(withKnobs);
// to allow inline info display using storybook addon-info
setDefaults({
  // to allow inline info display using storybook addon-info
  inline: true,
  // to style info addon
  styles: getWithInfoStyles()
});

addParameters({
  options: {
    // showPanel: false,
    panelPosition: 'right',
    sortStoriesByKind: true
  }
});

addDecorator(story => <Provider>{story()}</Provider>);
addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>);

configure(loadStories, module);
