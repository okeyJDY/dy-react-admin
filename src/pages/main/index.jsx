import React, { memo } from 'react';
import { HashRouter } from 'react-router-dom';

import { Layout } from 'antd';

import DYPageSider from '@/components/page-sider';
import DYPageHeader from '@/components/page-header';
import DYPageContent from '@/components/page-content';

export default memo(function DYPageMain() {

  return (
    <HashRouter>
      <Layout style={{ height: "100%", width: "100%" }}>
        <DYPageSider />
        <Layout>
          <DYPageHeader />
          <DYPageContent />
        </Layout>
      </Layout>
    </HashRouter>
  )
})
