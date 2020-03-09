import React, { useState, useEffect } from "react";
import { withRouter, Route, Switch, Link} from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import createOrder from "../createOrder/createOrder.jsx";
import viewOrder from "../viewOrder/viewOrder.jsx";

import './appScreen.css'

const { Header, Sider, Content } = Layout;



class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>All orders</span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>Create order</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
            }}
          >
                <div style={{ margin: "12px 16px 0" }}>
              <Switch>
              <Route
                exact
                path="/order/add"
                component={createOrder}
              />
                 <Route
                exact
                path="/orders/view"
                component={viewOrder}
              />
            </Switch>
          </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Dashboard);
