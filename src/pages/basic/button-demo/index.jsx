import React, { memo } from 'react';

import DYCustomBreadcrumb from '@/components/custom-breadcrumb';
import DYTypeCard from '@/components/typing-card';
import DYTypeButton from './c-pages/type-button';
import DYSizeButton from './c-pages/size-button';
import DYIconButton from './c-pages/icon-button';
import DYCombinationButton from './c-pages/combination-button';
import DYLoadingButton from './c-pages/loading-button';
import {
  ButtonDemoWrapper,
  ButtonDemoContent,
  ButtonDemoLeft,
  ButtonDemoRight
} from './style';

export default memo(function DYButtonDemo() {

  // other handle
  const cardContent = `标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。`
  return (
    <ButtonDemoWrapper>
      <DYCustomBreadcrumb title={["基本", "按钮"]} />
      <DYTypeCard source={cardContent} />
      <ButtonDemoContent>
        <ButtonDemoLeft>
          <DYTypeButton />
          <DYSizeButton />
        </ButtonDemoLeft>
        <ButtonDemoRight>
          <DYIconButton />
          <DYCombinationButton />
          <DYLoadingButton />
        </ButtonDemoRight>
      </ButtonDemoContent>
    </ButtonDemoWrapper>
  )
})
