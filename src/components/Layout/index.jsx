import React, { Component } from 'react';
import Layout, {
  Header,
  Sidebar,
  Main,
  Footer
} from '@ali/ice-layout';

import {
  Navigation,
  Menu
} from '@ali/ice';

import IceIcon from '@ali/ice-icon';

const {
  Item,
  Group
} = Navigation;

const FooterItem = Footer.Item;

// 可通过 http://ice.alibaba-inc.com/compose/template/select 模板搭建选择模板
// 以及自定义模板配置
// 以下代码为一个模板的示例

export default class CustomLayout extends Component {
  render() {
    return (
      <Layout>
        <Header fixed={true} theme="dark">
          <div className="ice-layout-header-logo">
            <img src="//img.alicdn.com/tps/TB1UuMDNXXXXXXOXpXXXXXXXXXX-106-56.png"/>
          </div>
          <div className="ice-layout-header-navigation">
            <Navigation
              type="text"
              >
              <Navigation.Item
                key="2"
                text="导航一"
                link="//www.taobao.com"
                >
              </Navigation.Item>
              <Navigation.Item
                key="3"
                text="导航二"
                link="//www.taobao.com"
                >
              </Navigation.Item>
            </Navigation>
          </div>
          <div className="ice-layout-header-account">
            <img src="//img.alicdn.com/tps/TB1kssgNXXXXXc_aXXXXXXXXXXX-56-56.png" />
            <Navigation type="text">
              <Navigation.Item itemid="1" text="姓名" link="http://www.taobao.com">
                <Menu>
                  <Menu.Item key="1"><a href="#">Option 1</a></Menu.Item>
                  <Menu.Item key="2"><a href="#">Option 2</a></Menu.Item>
                  <Menu.Item key="3"><a href="#">Option 3</a></Menu.Item>
                  <Menu.Item key="4"><a href="#">Option 4</a></Menu.Item>
                </Menu>
              </Navigation.Item>
            </Navigation>
          </div>
          <div className="ice-layout-header-search">
            <input type="text" placeholder="搜索内容" />
            <IceIcon type="search" />
          </div>
        </Header>
        <Sidebar fixed={true} theme="dark" fixedOffsetTop={76}>
          <Navigation
            root={true}
            type="tree"
          >
            <Navigation.Item key="1" text="导航条目壹" icon="email" selected={true}/>
            <Navigation.Item key="2" text="导航条目贰" icon="atm"/>
            <Navigation.Item key="3" text="导航条目叁" icon="all" opened={true}>
              <Navigation>
                <Navigation.Item key="4" text="导航条目肆"/>
                <Navigation.Item key="5" text="导航条目伍"/>
                <Navigation.Item key="6" text="导航条目陆"/>
              </Navigation>
            </Navigation.Item>
          </Navigation>
        </Sidebar>
        <Main
          padding={20}
          blockRowSpace={20}
          blockColSpace={20}
          blockColPadding={10}
        >
          {this.props.children}
        </Main>
      </Layout>
    );
  }
}
