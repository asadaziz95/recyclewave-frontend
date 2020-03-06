import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.css";



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginScreen = () => {
  const onFinish = values => {
    console.log('Success:', values);
    
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
    name="normal_login"
    className="login-form login-main"
    onFinish={onFinish}
  >
    <Form.Item>
      <h1>Recycle wave</h1>
    </Form.Item>
    <Form.Item
      name="username"
      rules={[{ required: true, message: 'Please input your Username!' }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your Password!' }]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>


    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button" style={{width:"100%"}}>
        Log in
      </Button>
    </Form.Item>
  </Form>
  );
};







export default withRouter(LoginScreen);