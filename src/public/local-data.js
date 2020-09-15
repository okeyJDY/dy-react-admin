import React from 'react';

import {
  HomeOutlined,
  LaptopOutlined,
  BarsOutlined,
  EditOutlined,
  DesktopOutlined,
  MessageOutlined,
  BulbOutlined,
  LoginOutlined,
  AntDesignOutlined
} from '@ant-design/icons';

export const menus = [
  {
    title: "首页",
    icon: <HomeOutlined />,
    path: "/home"
  },
  {
    title: "基本组件",
    icon: <LaptopOutlined />,
    path: "/basic",
    children: [
      { title: "按钮", path: "/basic/button", icon: <LoginOutlined /> },
      { title: "图标", path: "/basic/icon", icon: <AntDesignOutlined /> },
    ]
  },
  {
    title: "导航组件",
    icon: <BarsOutlined />,
    path: "/navigation",
    children: []
  },
  {
    title: "输入组件",
    icon: <EditOutlined />,
    path: "/entry",
    children: []
  },
  {
    title: "显示组件",
    icon: <DesktopOutlined />,
    path: "/display",
    children: []
  },
  {
    title: "反馈组件",
    icon: <MessageOutlined />,
    path: "/feedback",
    children: []
  },
  {
    title: "其他",
    icon: <BulbOutlined />,
    path: "/other",
    children: []
  }
]