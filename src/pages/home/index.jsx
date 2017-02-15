'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, IndexRoute, Link } from 'react-router';

// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@ali/ice/global.scss';
import './index.css';
// 当前 page 的主程序
import App from './App';

import Menu from './containers/Menu';
import Detail from './containers/Detail';

// 以下代码 ICE 自动生成, 请勿修改
ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Menu } />
      <Route path="detail" component={ Detail } />
    </Route>
  </Router>,
  document.getElementById('ice_page_home')
);
