import React, { memo, useState, useEffect, useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { menus } from '@/public/local-data';

import { Menu, Layout } from 'antd';
import { DYPageSiderWrapper } from './style';

const { SubMenu, Item } = Menu;

export default memo(function DYPageSider(props) {
  // props and state
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);

  // redux hooks
  const { collapsed } = useSelector(state => ({
    collapsed: state.getIn(["main", "collapsed"])
  }), shallowEqual);

  // other hooks
  const { pathname } = useLocation();
  useEffect(() => {
    const rank = pathname.split("/").filter(item => item !== "");
    switch (rank.length) {
      case 1:
        setSelectedKeys([pathname]);
        break
      case 2: 
        setOpenKeys([pathname.substr(0, pathname.lastIndexOf("/"))]);
        setSelectedKeys([pathname]);
        break
      default:
    }
  }, [pathname])

  // function handle
  const clickMenu = useCallback(info => {
    setSelectedKeys([info.key])
  }, []);
  const changeOpen = useCallback(openKeys => {
    setOpenKeys([openKeys[1]]);
  }, [])
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
        <NavLink to={menuItem.path} replace>{menuItem.title}</NavLink>
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
              openKeys={openKeys}
              selectedKeys={selectedKeys}
              onOpenChange={openKeys => changeOpen(openKeys)}
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
