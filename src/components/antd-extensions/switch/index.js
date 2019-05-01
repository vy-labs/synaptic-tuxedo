import React, { Fragment } from 'react';
import { Switch } from 'antd';
import { themeGet } from 'styled-system';
import system from 'system-components';
import cleanComponent from 'tuxedo/utils/cleanStyledComponentProps';
import hoistNonReactStatics from 'hoist-non-react-statics';

const StyledSwitch = system(
  {
    is: cleanComponent(Switch)
  },

  props => {
    return {
      // Add Styles here
    };
  }
);

StyledSwitch.displayName = 'Switch';

export default hoistNonReactStatics(StyledSwitch, Switch);
