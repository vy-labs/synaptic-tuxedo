import React, { Fragment } from 'react';
import { Tooltip } from 'antd';
import { themeGet } from 'styled-system';
import system from 'system-components';
import cleanComponent from 'tuxedo/utils/cleanStyledComponentProps';
import hoistNonReactStatics from 'hoist-non-react-statics';

const StyledTooltip = system({ is: cleanComponent(Tooltip) });

StyledTooltip.displayName = 'Tooltip';

export default hoistNonReactStatics(StyledTooltip, Tooltip);
