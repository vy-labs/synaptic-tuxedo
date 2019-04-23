import React, { Fragment } from 'react';
import { themeGet } from 'styled-system';
import system from 'system-components';

// Tuxedo imports
import Text from '../text';

/** component to generate text in mono font-family */
const Mono = system(
  {
    is: Text
  },
  props => {
    return {
      fontFamily: themeGet('fonts.mono')(props)
    };
  }
);

Mono.propTypes = Text.propTypes;

Mono.displayName = 'Mono';

export default Mono;
