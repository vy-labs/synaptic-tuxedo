import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import tabsStories from './tabs/stories';
import statusStories from './status/stories';
import ratingStories from './rating/stories';
import dotStories from './dot/stories';
import compareCalendarStories from './compare-calendar/stories';
import iconedFilterStories from './iconed-filter/stories';
import errorMessageStories from './error-message/stories';

import sliderStories from './slider/stories';
import histogramStories from './histogram/stories';
import rangeSelectorStories from './range-selector/stories';
import multiSelectStory from './multi-select/stories';
import treeSelectStory from './tree-select/stories';
import contentDDStories from './content-dropdown/stories';
import groupedMultiSelectStories from './grouped-multi-select/stories';
import imgStories from './img/stories';
import closeIconStories from './close-icon/stories';
import sorterStories from './sorter/stories';
import appIconStories from './app-icon/stories';
import nameIconStories from './name-icon/stories';
import tickerStories from './ticker/stories';

const storiesArr = [
  {
    heading: 'Tabs',
    componentStories: tabsStories
  },
  {
    heading: 'Status',
    componentStories: statusStories
  },
  {
    heading: 'Rating',
    componentStories: ratingStories
  },
  {
    heading: 'Dot',
    componentStories: dotStories
  },
  {
    heading: 'Compare Calendar',
    componentStories: compareCalendarStories
  },
  {
    heading: 'Iconed Filter',
    componentStories: iconedFilterStories
  },
  {
    heading: 'Slider',
    componentStories: sliderStories
  },
  {
    heading: 'Histogram',
    componentStories: histogramStories
  },
  {
    heading: 'Range Selector',
    componentStories: rangeSelectorStories
  },
  {
    heading: 'Multi Select',
    componentStories: multiSelectStory
  },
  {
    heading: 'Tree Select',
    componentStories: treeSelectStory
  },
  {
    heading: 'Content DD',
    componentStories: contentDDStories
  },
  {
    heading: 'Grouped Multi-Select',
    componentStories: groupedMultiSelectStories
  },
  {
    heading: 'Img',
    componentStories: imgStories
  },
  {
    heading: 'Close Icon',
    componentStories: closeIconStories
  },
  {
    heading: 'Sorter',
    componentStories: sorterStories
  },
  {
    heading: 'AppIcon',
    componentStories: appIconStories
  },
  {
    heading: 'NameIcon',
    componentStories: nameIconStories
  },
  {
    heading: 'Ticker',
    componentStories: tickerStories
  },
  {
    heading: 'Error Message',
    componentStories: errorMessageStories
  }
];

const stories = storiesOf('Components', module);
_.sortBy(storiesArr, 'heading').map(obj => {
  if (obj.children) {
    obj.children.forEach(el => {
      storiesOf(`Components/${obj.heading}`, module).add(
        el.heading,
        el.componentStories
      );
    });
  } else {
    stories.add(obj.heading, obj.componentStories);
  }
  return obj;
});
