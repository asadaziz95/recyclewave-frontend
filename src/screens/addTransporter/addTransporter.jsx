import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Form, Input, Button, Checkbox,message,Row,Col } from 'antd';
import { UserOutlined, LockOutlined,IdcardOutlined } from '@ant-design/icons';

import axios from 'axios';
import "./addTransporter.css";



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
      userType: "transporter",
      licenseNumber:values.licenseNumber,
      adminId:localStorage.getItem('_id')
    }
    axios({
      method: "post",
      url: `http://localhost:8000/transpoter_signup`,
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
      .then(response => {
        if(response.status===200){
          message.success("Transporter Added Successfully")
           props.history.push('/transporters/view')
        }
      })
      .catch(error => {
        message.error(error.response.data)
      });


  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);

  };

  return (
    <>
        <div
        style={{
          padding: 24,
          background: "#fff",
          minHeight: 120,
          marginBottom: 20
        }}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ textAlign: "center" }}>
            <span className="content-title">Add Transporter</span>
          </Col>
        </Row>
      </div>
    <Form
      name="normal_login"
      className="add-transpoter-main"
      onFinish={onFinish}
    >
      <Form.Item>
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
      <Form.Item
        name="licenseNumber"
        rules={[{ required: true, message: 'Please input your License Number!' },
        // { min: 12, message: 'Password length is short' }
        ]}
      >
        <Input
          prefix={<IdcardOutlined className="site-form-item-icon" />}
          placeholder="License Number"
        />
      </Form.Item>
      

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "100%" }}>
          Sign up
      </Button>
      </Form.Item>
    </Form>
    </>    
  );
};







export default withRouter(SignupScreen);