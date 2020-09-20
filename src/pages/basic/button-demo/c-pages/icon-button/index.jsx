import React, { memo } from 'react';

import { Card, Tooltip, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { IconButtonWrapper } from './style';

export default memo(function DYIconButton() {
  return (
    <IconButtonWrapper className="icon-button">
      <Card bordered={false}>
        <div className="icon-button-1">
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />&emsp;
          </Tooltip>
          <Button type="primary" icon={<SearchOutlined />}>Search</Button>&emsp;
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />&emsp;
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
        </div>
        <div className="icon-button-2">
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />&emsp;
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>&emsp;
          <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />&emsp;
          </Tooltip>
          <Button type="dashed" icon={<SearchOutlined />}>Search</Button>
        </div>
      </Card>
    </IconButtonWrapper>
  )
})
