import { Icon } from 'antd';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import system from 'system-components';
import cleanComponent from 'tuxedo/utils/cleanStyledComponentProps';
import hoistNonReactStatics from 'hoist-non-react-statics';

const VARIANTS = {
  default: {
    fontWeight: 'bold'
  },
  light : {
    fontWeight: 'normal'
  }
};

const StyledIcon = system(
  {
    is: cleanComponent(Icon)
  },

  props => ({
    fontWeight: themeGet(`fontWeights.${VARIANTS[props.variant].fontWeight}`)(props)
  }),
  'space',
  'color'
);

StyledIcon.propTypes = {
  ...StyledIcon.propTypes,
  ...Icon.propTypes,
  variant : PropTypes.oneOf(Object.keys(VARIANTS))
};

StyledIcon.defaultProps = {
  variant: 'default'
};

StyledIcon.displayName = 'AntdIcon';

export default hoistNonReactStatics(StyledIcon, Icon);
