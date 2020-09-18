import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { Layout } from 'antd';
import { changeCollapsedAction } from "@/pages/main/redux/actionCreators";

import { DYPageHeaderWrapper } from './style';

export default memo(function DYPageHeader() {

  const dispatch = useDispatch();
  const { collapsed } = useSelector(state => ({
    collapsed: state.getIn(["main", "collapsed"])
  }), shallowEqual)

  return (
    <DYPageHeaderWrapper>
      <Layout.Header className="header">
        {
          collapsed ?
            <MenuUnfoldOutlined className="header-item"
                                onClick={e => dispatch(changeCollapsedAction(!collapsed))} /> :
            <MenuFoldOutlined className="header-item"
                              onClick={e => dispatch(changeCollapsedAction(!collapsed))} />
        }
      </Layout.Header>
    </DYPageHeaderWrapper>
  )
})
