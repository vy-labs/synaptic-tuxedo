import React, { Component } from 'react';
import { Dropdown } from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';

const TuxDropDown = (props) => {
  const { overlayStyle = {}, ...restProps } = props;
  overlayStyle.lineHeight = 'initial';
  return (
    <Dropdown
      overlayStyle={overlayStyle}
      {...restProps}
    />
  );
};

TuxDropDown.displayName = 'Dropdown';
export default hoistNonReactStatics(TuxDropDown, Dropdown);
