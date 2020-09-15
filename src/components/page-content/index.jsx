import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import { Layout } from 'antd';
import routes from '@/routers';

import { DYPageContentWrapper } from './style';

export default memo(function DYPageContent() {
  return (
    <DYPageContentWrapper>
      <Layout.Content>
        {renderRoutes(routes)}
      </Layout.Content>
    </DYPageContentWrapper>
  )
})
