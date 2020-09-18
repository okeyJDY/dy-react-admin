import React from 'react';
import { Redirect } from 'react-router-dom';

import DYHome from '@/pages/home';
import DYBasic from '@/pages/basic';
import DYButtonDemo from '@/pages/basic/button-demo';
import DYIconDemo from '@/pages/basic/icon-demo';

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    component: DYHome
  },
  {
    path: "/basic",
    component: DYBasic,
    routes: [
      {
        path: "/basic",
        exact: true,
        render: () => <Redirect to="/basic/button" />
      },
      {
        path: "/basic/button",
        component: DYButtonDemo
      },
      {
        path: "/basic/icon",
        component: DYIconDemo
      }
    ]
  }
]

export default routes;