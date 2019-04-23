import React from 'react';
import { Dropdown, Menu, AntdIcon } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
  </Menu>
);

function story() {
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
        Hover me <AntdIcon type="down" />
      </a>
    </Dropdown>
  );
}

export default withInfo({
  text: 'wrapper over antd dropdown, no extra prop supported for now',
  propTablesExclude: [AntdIcon]
})(story);


