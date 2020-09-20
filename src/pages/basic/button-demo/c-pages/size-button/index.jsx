import React, { memo, useState } from 'react';

import { Card, Radio, Button } from 'antd';
import { DownloadOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { SizeButtonWrapper } from './style';

export default memo(function DYSizeButton() {
  // props and state
  const [size, setSize] = useState("default");

  return (
    <SizeButtonWrapper className="size-button">
      <Card bordered={false}>
        <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <div className="type-button">
          <Button type="primary" size={size}>Primary</Button>&emsp;
          <Button type="default" size={size}>Default</Button>&emsp;
          <Button type="dashed" size={size}>Dashed</Button>&emsp;
          <Button danger size={size}>Danger</Button>&emsp;
          <Button type="text" size={size}>Text</Button>&emsp;
          <Button type="link" size={size}>Link</Button>&emsp;
        </div>
        <div className="shape-button">
          <Button type="primary" size={size} icon={<DownloadOutlined />} />&emsp;
          <Button type="primary" shape="circle" size={size} icon={<DownloadOutlined />} />&emsp;
          <Button type="primary" shape="round" size={size} icon={<DownloadOutlined />} />&emsp;
          <Button type="primary" shape="round" size={size} icon={<DownloadOutlined />}>Download</Button>&emsp;
          <Button type="primary" size={size} icon={<DownloadOutlined />}>Download</Button>
        </div>
        <div className="disabled-button">
          <Button type="primary" disabled>Primary(disabled)</Button>&emsp;
          <Button type="text" disabled>Text Button(disabled)</Button>
        </div>
        <div>
          <Button size={size}><LeftOutlined />BackWard</Button>&emsp;
          <Button size={size}>ForWard<RightOutlined /></Button>
        </div>
      </Card>
    </SizeButtonWrapper>
  )
})
