import { storiesOf } from '@storybook/react';
import _ from 'lodash';

import boxStories from './box/stories';
import flexboxStories  from './flexbox/stories';
import monoStories from './mono/stories';
import ellipsisStories from './ellipsis/stories';
import headingStories from './heading/stories';
import textStories from './text/stories';
import anchorStories from './anchor/stories';
import paragraphStories from './paragraph/stories';
import linkTextStories from './link-text/stories';
import fontIconStories from './font-icon/stories';

const storiesArr = [{
  heading: 'Box',
  componentStories: boxStories
}, {
  heading: 'FlexBox',
  componentStories: flexboxStories
}, {
  heading: 'Ellipsis',
  componentStories: ellipsisStories
}, {
  heading: 'Anchor',
  componentStories: anchorStories
}, {
  heading: 'Mono',
  componentStories: monoStories
}, {
  heading: 'Heading',
  componentStories: headingStories
}, {
  heading: 'Text',
  componentStories: textStories
}, {
  heading: 'Paragraph',
  componentStories: paragraphStories
}, {
  heading: 'LinkText',
  componentStories: linkTextStories
}, {
  heading: 'Font Icon',
  componentStories: fontIconStories
}];

const stories = storiesOf('Atoms', module);

_.sortBy(storiesArr, 'heading').map(obj => {
  stories.add(obj.heading, obj.componentStories);
  return obj;
});
