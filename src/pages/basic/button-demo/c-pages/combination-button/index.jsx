import React, { memo } from 'react';

import { Card, Button, Dropdown, Menu, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CombinationButton } from './style';

export default memo(function DYCombinationButton() {

  // jsx const
  const menu = (
    <Menu onClick={e => message.info(`click on item ${e.key}`)}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  return (
    <CombinationButton className="combination-button">
      <Card bordered={false}>
        <Button type="primary">primary</Button>&emsp;
        <Button>secondary</Button>&emsp;
        <Dropdown overlay={menu}>
          <Button>
            Actions <DownOutlined />
          </Button>
        </Dropdown>
        <div className="ghost-button">
          <Button type="primary" ghost>Primary</Button>&emsp;
          <Button ghost>Default</Button>&emsp;
          <Button type="dashed" ghost>Dashed</Button>
        </div>  
      </Card>
    </CombinationButton>
  )
})
