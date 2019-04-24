import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Dropdown, FlexBox, SvgIcon } from 'tuxedo';
import styled from 'styled-components';
import hoistNonReactStatics from 'hoist-non-react-statics';

import FlexBox from '../../atoms/flexbox';
import Dropdown from '../../antd-extensions/dropdown';
// import SvgIcon from '../../components/svg-icon';
import FontIcon from '../../atoms/font-icon';

const StyledDDContent = styled(FlexBox)`
  cursor: pointer;
`;

const DDSvgIcon = styled(FontIcon)`
  svg {
    transition: transform 0.3s;
  }
`;

/** Extension of antd dropDown supports all the props of antd
 */
class ContentDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popUpVisible: false
    };

    this.handlePopupVisibilityChange = this.handlePopupVisibilityChange.bind(
      this
    );
  }

  handlePopupVisibilityChange(popUpVisible) {
    const { onVisibleChange } = this.props;
    this.setState({ popUpVisible });
    onVisibleChange && onVisibleChange(popUpVisible);
  }

  render() {
    const { popUpVisible } = this.state;
    const {
      onVisibleChange,
      trigger = ['click'],
      children,
      ...restProps
    } = this.props;

    return (
      <Dropdown
        trigger={trigger}
        onVisibleChange={this.handlePopupVisibilityChange}
        {...restProps}
      >
        <StyledDDContent alignItems='center'>
          {React.Children.only(children)}
          <DDSvgIcon type='downmark' ml={3} size={2} />
        </StyledDDContent>
      </Dropdown>
    );
  }
}

ContentDropdown.propTypes = {
  onVisibleChange: PropTypes.func,
  trigger: PropTypes.array,
  children: PropTypes.any
};

export default hoistNonReactStatics(ContentDropdown, Dropdown);
