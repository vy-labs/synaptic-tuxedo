import system from 'system-components';
import styled from 'styled-components';
import { style } from 'styled-system';
import React from 'react';
import { themeGet } from 'styled-system';
import cleanComponentProps from 'tuxedo/utils/cleanComponentProps';
import { Tag } from 'clean-tag';

const BoxBase = system(
  {
    is: Tag
  },
  'space',

  'width',
  'maxWidth',
  'minWidth',

  'height',
  'maxHeight',
  'minHeight',

  'position',

  'display',

  'flex'
);

BoxBase.displayName = 'Box';

export default BoxBase;
