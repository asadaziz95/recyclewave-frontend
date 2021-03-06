import React, { useState, useEffect } from "react";
import { withRouter, Route, Switch, Link} from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import axios from 'axios';

import createOrder from "../createOrder/createOrder.jsx";
import viewOrder from "../viewOrder/viewOrder.jsx";
import addTransporter from "../addTransporter/addTransporter.jsx"
import viewTransporter from "../viewTransporters/viewTransporters.jsx"

import './appScreen.css'

const { Header, Sider, Content } = Layout;



class Dashboard extends React.Component {
  constructor(props){
    super(props);

  }
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  Logout=()=>{
    axios({
      method: "delete",
      url: `http://localhost:8000/logout`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth":    localStorage.getItem("token")
      }
    })
      .then(response => {
        if(response.status===200){
          localStorage.clear();
            this.props.history.push('/login')
        }
      })
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          {/* <div className="logo">
             <img src="./logoFinal.jpg" />
            Recycle Wave
            </div> */}
            <div className="logo">

            </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/orders/view">
              <UserOutlined />
              <span>All orders</span>
              </Link>
            </Menu.Item>
            {localStorage.getItem("userType")==='user'?
            <Menu.Item key="2">
              <Link to="/order/add">
              <VideoCameraOutlined />
              <span>Create order</span>
              </Link>
              </Menu.Item>
:""}

              {localStorage.getItem("userType")==='admin'?
              
                <Menu.Item key="3">
                <Link to="/transporter/add">
                <VideoCameraOutlined />
                <span>Add Transporter</span>
                </Link>
              </Menu.Item>:'' 
            }

{localStorage.getItem("userType")==='admin'?
              
              
<Menu.Item key="4">
                <Link to="/transporters/view">
                <VideoCameraOutlined />
                <span>View Transporters</span>
                </Link>
              </Menu.Item>:'' 
          }


            
      
            <Menu.Item key="5" onClick={()=>this.Logout()}>
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
                <Route
                exact
                path="/transporter/add"
                component={addTransporter}
              />
                     <Route
                exact
                path="/transporters/view"
                component={viewTransporter}
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
