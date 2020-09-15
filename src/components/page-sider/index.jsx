import React, { memo, useState, useEffect, useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { menus } from '@/public/local-data';

import { Menu, Layout } from 'antd';
import { DYPageSiderWrapper } from './style';

const { SubMenu, Item } = Menu;

export default memo(function DYPageSider(props) {
  // props and state
  const [selectedKeys, setSelectedKeys] = useState("");

  // redux hooks
  const { collapsed } = useSelector(state => ({
    collapsed: state.getIn(["main", "collapsed"])
  }), shallowEqual);

  // other hooks
  const location = useLocation();
  useEffect(() => {
    setSelectedKeys(location.pathname);
  }, [location])

  // function handle
  const clickMenu = useCallback((info) => {
    console.log(props, "info")
    setSelectedKeys(info.key)
  }, [props]);
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
        <NavLink to={menuItem.path}>{menuItem.title}</NavLink>
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
              selectedKeys={selectedKeys}
              onClick={info => clickMenu(info)} >
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
