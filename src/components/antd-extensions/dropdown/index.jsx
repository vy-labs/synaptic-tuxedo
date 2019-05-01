import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';

const TuxDropDown = props => {
  const { overlayStyle = {}, ...restProps } = props;
  overlayStyle.lineHeight = 'initial';
  return <Dropdown overlayStyle={overlayStyle} {...restProps} />;
};

TuxDropDown.propTypes = {
  overlayStyle: PropTypes.any
};

TuxDropDown.displayName = 'Dropdown';
export default hoistNonReactStatics(TuxDropDown, Dropdown);
