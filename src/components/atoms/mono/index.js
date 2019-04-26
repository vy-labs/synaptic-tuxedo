import React, { Fragment } from 'react';
import { themeGet } from 'styled-system';
import system from 'system-components';
import Text from 'tuxedo/components/atoms/text';

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
