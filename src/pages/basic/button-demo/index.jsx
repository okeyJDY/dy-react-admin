import React, { memo } from 'react';

import DYCustomBreadcrumb from '@/components/custom-breadcrumb';
import DYTypeCard from '@/components/typing-card';
import { ButtonDemoWrapper } from './style';

export default memo(function DYButtonDemo() {

  // other handle
  const cardContent = `标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。`
  return (
    <ButtonDemoWrapper>
      <DYCustomBreadcrumb title={["基本", "按钮"]} />
      <DYTypeCard source={cardContent} />
    </ButtonDemoWrapper>
  )
})
