import React, { Fragment } from 'react';
import { Skeleton } from 'antd';
import { themeGet } from 'styled-system';
import system from 'system-components';
import cleanComponent from 'tuxedo/utils/cleanStyledComponentProps';

const StyledSkeleton = system(
  {
    is: cleanComponent(Skeleton)
  },

  props => {
    return {
      '.ant-skeleton-paragraph': {
        padding: 0
      }
    };
  },

  'space',
  'width',
  'height'
);

StyledSkeleton.displayName = 'Skeleton';

export default StyledSkeleton;
