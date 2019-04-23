import { Popover } from 'antd';
import system from 'system-components';
import cleanComponent from 'tuxedo/utils/cleanStyledComponentProps';
import hoistNonReactStatics from 'hoist-non-react-statics';

const StyledPopOver = system(
  {
    is: cleanComponent(Popover)
  },

  props => {
    return {};
  }
);

StyledPopOver.displayName = 'PopOver';

export default hoistNonReactStatics(StyledPopOver, Popover);
