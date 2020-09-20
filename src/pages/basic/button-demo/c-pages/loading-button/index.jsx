import React, { memo, useCallback, useState } from 'react';

import { Card, Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { LoadingButton } from './style';

export default memo(function DYLoadingButton() {
  // props and state
  const [loadings, setLoadings] = useState([]);

  // function handle
  const clickButton = useCallback((index) => {
    setLoadings(pevLoadings => {
      const newLoadings = [...pevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings(pevLoadings => {
        const newLoadings = [...pevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  }, []);

  return (
    <LoadingButton className="loading-button">
      <Card bordered={false}>
        <div className="loading">
          <Button loading type="primary">Primary</Button>&emsp;
          <Button loading type="primary">Primary</Button>&emsp;
          <Button loading type="primary" shape="circle" />
        </div>
        <div className="async-loading">
          <Button loading={loadings[0]}
                  type="primary" 
                  onClick={e => clickButton(0)}>
            Click Me
          </Button>&emsp;
          <Button loading={loadings[1]}
                  type="primary" 
                  icon={<PoweroffOutlined />} 
                  onClick={e => clickButton(1)}>
            Click Me
          </Button>&emsp;
          <Button loading={loadings[2]}
                  type="primary" 
                  shape="circle" 
                  icon={<PoweroffOutlined />} 
                  onClick={e => clickButton(2)} />
        </div>
      </Card>
    </LoadingButton>
  )
})
