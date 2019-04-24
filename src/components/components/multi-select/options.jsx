import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import PropTypes from 'prop-types';

import FlexBox from '../../atoms/flexbox';
import Text from '../../atoms/text';
import Checkbox from '../../antd-extensions/checkbox';

const StyledCheckbox = styled(Checkbox)`
  &.ant-checkbox-wrapper {
    padding: 0;
    display: flex;
    & > span {
      padding: ${themeGet('space.1')}px;
    }
    .ant-checkbox + span {
      flex: 1;
    }
    .ant-checkbox + span:hover {
      background: ${themeGet('colors.grey.2')};
      border-radius: ${themeGet('radii.1')}px;
    }
  }
`;

class SingleOption extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { onChange, option } = this.props;
    onChange(option, e);
  }

  render() {
    const { option, labelKey, valueKey, optionLabelRenderer } = this.props;
    return (
      <div>
        <StyledCheckbox
          onChange={this.onChange}
          {...option}
          checked={option[valueKey]}
        >
          <Text fontWeight='semibold' textStyle='wrapped'>
            {optionLabelRenderer
              ? optionLabelRenderer({
                  option,
                  labelKey,
                  valueKey
                })
              : option[labelKey]}
          </Text>
        </StyledCheckbox>
      </div>
    );
  }
}

export default function OptionsColumn({
  width,
  options,
  labelKey,
  onChange,
  valueKey,
  optionLabelRenderer
}) {
  return (
    <FlexBox flexDirection='column' width={width} flex={1} px={3} py={3}>
      {options.map((option, index) => (
        <SingleOption
          onChange={onChange}
          labelKey={labelKey}
          valueKey={valueKey}
          optionLabelRenderer={optionLabelRenderer}
          option={option}
          key={option.key || index}
        />
      ))}
    </FlexBox>
  );
}

OptionsColumn.propTypes = {
  /** width  */
  width: PropTypes.string,
  /** other than key all the other object attributes map to antd checkbox */
  // options: PropTypes.shape({
  //   key: PropTypes.string
  // }),
  options: PropTypes.array,
  labelKey: PropTypes.string,
  /** callback called with the option object on checkbox state change */
  onChange: PropTypes.func,
  valueKey: PropTypes.string,
  optionLabelRenderer: PropTypes.func
};

OptionsColumn.defaultProps = {
  options: [],
  labelKey: 'label',
  valueKey: 'checked'
};

OptionsColumn.displayName = 'MultiSelect.OptionsColumn';
