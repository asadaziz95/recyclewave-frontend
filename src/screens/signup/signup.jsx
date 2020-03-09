import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import axios from 'axios';
import "./signup.css";



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

const SignupScreen = (props) => {
  const onFinish = values => {
    console.log('Success:', values);

    let data = {
      name: {
        firstName: values.firstName,
        lastName: values.lastName
      },
      email: values.email,
      password: values.password,
      userType: "user",
    }
    console.log(data);
    axios({
      method: "post",
      url: `http://localhost:8000/user_signup`,
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "X-User-Email": readLocalStorage("X-User-Email"),
        // "X-User-Token": readLocalStorage("X-User-Token")
      }
    })
      .then(response => {
        if(response.status===200){
            props.history.push('/login')
        }
        //console.log(response);
        //.status
        // return dispatch({ type: PROJECT_CREATE_SUCCESS, response: response });
      })
      .catch(error => {
        //  debugger;
        message.error(error.response.data)
        console.log(error.response.data);
        // if (error.response.status === 401) {
        //   dispatch(tokenAuthFailedAction());
        // }

      });


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
        name="firstName"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="FirstName" />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="LastName" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Email!' }, { type: 'email', message: 'Please input valid email' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' },
        { min: 8, message: 'Password length is short' }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "100%" }}>
          Sign up
      </Button>
      </Form.Item>
    </Form>
  );
};







export default withRouter(SignupScreen);