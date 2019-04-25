import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import autoCompleteStories from './autocomplete/stories';
// import tableStories from './table/stories';
import tooltipStories from './tooltip/stories';
import popoverStories from './popover/stories';
// import cardStories from './card/stories';
import switchStories from './switch/stories';
import skeletonStories from './skeleton/stories';
import popupStories from './popup/stories';
// import sliderStories from './slider/stories';
import buttonStories from './button/stories';
import checkboxStories from './checkbox/stories';
import dropdownStories from './dropdown/stories';
import inputStories from './input/stories';
import menuStories from './menu/stories';
import radioStories from './radio/stories';
import selectStories from './select/stories';
import tagStories from './tag/stories';
// import modalStories from './modal/stories';
import antdIconStories from './antd-icon/stories';
// {
//   heading: 'AutoComplete',
//   componentStories: autoCompleteStories
// }, {
//   heading: 'Modal',
//   componentStories: modalStories
// }, {
//   heading: 'Card',
//   componentStories: cardStories
// }, {
//   heading: 'Table',
//   componentStories: tableStories
// },

const storiesArr = [
  {
    heading: 'Auto Complete',
    componentStories: autoCompleteStories
  },
  {
    heading: 'Antd Icon',
    componentStories: antdIconStories
  },
  {
    heading: 'Tooltip',
    componentStories: tooltipStories
  },
  {
    heading: 'Switch',
    componentStories: switchStories
  },
  {
    heading: 'Skeleton',
    componentStories: skeletonStories
  },
  {
    heading: 'Popover',
    componentStories: popoverStories
  },
  {
    heading: 'Popup',
    componentStories: popupStories
  },
  {
    heading: 'Button',
    componentStories: buttonStories
  },
  {
    heading: 'Checkbox',
    componentStories: checkboxStories
  },
  {
    heading: 'Dropdown',
    componentStories: dropdownStories
  },
  {
    heading: 'Menu',
    componentStories: menuStories
  },
  {
    heading: 'Radio',
    componentStories: radioStories
  },
  {
    heading: 'Select',
    componentStories: selectStories
  },
  {
    heading: 'Tag',
    componentStories: tagStories
  },
  {
    heading: 'Input',
    componentStories: inputStories
  }
];

const stories = storiesOf('Antd Extensions', module).addDecorator(withKnobs);

_.sortBy(storiesArr, 'heading').map(obj => {
  stories.add(obj.heading, obj.componentStories);
  return obj;
});
