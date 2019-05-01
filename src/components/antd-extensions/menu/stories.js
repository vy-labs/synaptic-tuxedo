import React from 'react';
import { Menu, AntdIcon, Box } from 'tuxedo';
import { withInfo } from '@storybook/addon-info';

function story() {
  return (
    <React.Fragment>
      <Menu
        onClick={console.log}
        selectedKeys={['mail']}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <AntdIcon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <AntdIcon type="appstore" />Navigation Two
        </Menu.Item>
      </Menu>

      <Box mt={2}>
        <Menu
          onClick={console.log}
          selectedKeys={['mail']}
          mode="vertical"
        >
          <Menu.Item key="mail">
            <AntdIcon type="mail" />Navigation One
          </Menu.Item>
          <Menu.Item key="test">
            Navigation test
          </Menu.Item>
          <Menu.Item key="app" disabled>
            <AntdIcon type="appstore" />Navigation Two
          </Menu.Item>
        </Menu>
      </Box>
    </React.Fragment>
  );
}

export default withInfo({
  text: 'Wrapper over antd Menu, no extra props supported yet',
  propTablesExclude: [AntdIcon]
})(story);
