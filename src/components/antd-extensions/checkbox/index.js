import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import hoistNonReactStatics from 'hoist-non-react-statics';

/**
 * &.ant-checkbox-wrapper {
    display: flex;
    margin: 0;
    align-items: center;
    line-height: initial;
  }

  .ant-checkbox {
    top: 0;
  }

  &.ant-checkbox-wrapper + span, .ant-checkbox + span {
    line-height: initial;
    display: inline-block;
  }

  .ant-checkbox input {
    margin: 0;
  }

  .ant-checkbox-inner {
    border-radius: ${themeGet('radii.1')}px;
  }
 */
const StyledCheckbox = styled(Checkbox)`
  ${props =>
    props.color
      ? `
    &.ant-checkbox-wrapper:hover {
      .ant-checkbox-inner {
        border-color: ${props.color};
      }
    }

    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: ${props.color};
      }
    }

    .ant-checkbox-checked:after {
      border: 1px solid ${props.color};
    }

    .ant-checkbox-indeterminate .ant-checkbox:after {
      background-color: ${props.color};
    }

    .ant-checkbox-checked {
      .ant-checkbox-inner {
        background-color: ${props.color};
        border-color: ${props.color};
      }
    }
    `
      : ''}
  .ant-checkbox-checked .ant-checkbox-inner:after {
    ${props => `opacity: ${props.hideInnerTick ? 0 : 1};`}
  }

  &.ant-checkbox-wrapper {
    display: flex;
    align-items: flex-start;
    padding: ${themeGet('space.1')}px;
  }

  &.ant-checkbox-wrapper.ant-checkbox-wrapper {
    margin: 0px;
  }

  &.ant-checkbox-wrapper + span,
  .ant-checkbox + span {
    display: flex;
    align-items: center;
    line-height: initial;
  }

  .ant-checkbox {
    top: 0;
  }

  .ant-checkbox input {
    margin: 0;
  }

  .ant-checkbox-inner {
    border-radius: ${themeGet('radii.1')}px;
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner {
    :after {
      height: 2px;
      width: 8px;
      background-color: ${themeGet('colors.white')};
      border-radius: 1px;
    }
    background-color: ${themeGet('colors.blue.6')};
    border-color: ${themeGet('colors.blue.6')};
  }
`;

StyledCheckbox.displayName = 'Checkbox';
StyledCheckbox.propTypes = Object.assign({}, Checkbox.propTypes, {
  color: PropTypes.string,
  /** hides inner tick */
  hideInnerTick: PropTypes.bool
});

export default hoistNonReactStatics(StyledCheckbox, Checkbox);
