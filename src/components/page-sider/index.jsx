import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { menus } from '@/public/local-data';

import { Menu, Layout } from 'antd';
import { DYPageSiderWrapper } from './style';

const { SubMenu, Item } = Menu;

export default memo(function DYPageSider() {

  // redux hooks
  const { collapsed } = useSelector(state => ({
    collapsed: state.getIn(["main", "collapsed"])
  }), shallowEqual);

  // function handle
  const clickMenu = (info) => {
    console.log(info, "info")
  };
  const renderSubMenu = (subMenu) => {
    return (
      <SubMenu key={subMenu.path} icon={subMenu.icon} title={subMenu.title}>
        {
          subMenu.children && subMenu.children.map((item, index) => {
            return (
              item.children && item.children.length > 0 ?
                renderSubMenu(item) :
                renderMenuItem(item)
            )
          })
        }
      </SubMenu>
    )
  };
  const renderMenuItem = (menuItem) => {
    return (
      <Item key={menuItem.path} icon={menuItem.icon}>
        {menuItem.title}
      </Item>
    )
  }

  return (
    <DYPageSiderWrapper>
      <Layout.Sider className="sider"
                    collapsible 
                    trigger={null} 
                    collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark"
              mode="inline"
              onClick={clickMenu} >
          {
            menus.map((item, index) => {
              return (
                item.children && item.children.length > 0 ? 
                  renderSubMenu(item) :
                  renderMenuItem(item)
              )
            })
          }
        </Menu>
      </Layout.Sider>
    </DYPageSiderWrapper>
  )
})
