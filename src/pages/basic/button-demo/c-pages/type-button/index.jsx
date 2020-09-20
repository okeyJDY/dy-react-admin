import React, { memo } from 'react';

import { Card, Button } from 'antd';
import { TypeButtonWrapper } from './style';

export default memo(function DYTypeButton() {
  return (
    <TypeButtonWrapper  className="type-button">
      <Card bordered={false}>
        <Button type="primary">Primary</Button>&emsp;
        <Button type="default">Default</Button>&emsp;
        <Button type="dashed">Dashed</Button>&emsp;
        <Button danger>Danger</Button>&emsp;
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Card>
    </TypeButtonWrapper>
  )
})
