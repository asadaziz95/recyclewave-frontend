import React, { useState, useEffect } from "react";
import { withRouter, Redirect ,Link} from "react-router-dom";
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios'
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

const LoginScreen = (props) => {
  const onFinish = values => {
    console.log('Success:', values);
    let data = {
      email: values.email,
      password: values.password,
    }
    console.log(data);
    axios({
      method: "post",
      url: `http://localhost:8000/login`,
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
      .then(response => {
        if(response.status===200){
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("_id",response.data.data._id)
          localStorage.setItem("email",response.data.data.email);
          localStorage.setItem("userType",response.data.data.userType);
            props.history.push('/orders/view')
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
    <Form
    name="normal_login"
    className="login-form login-main"
    onFinish={onFinish}
  >
    <Form.Item>
      <h1>Recycle wave</h1>
    </Form.Item>
    <Form.Item
      name="email"
      rules={[{ required: true, message: 'Please input your Email!' },
      { type: "email", message: 'Email is invalid' }
    ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
    <Form.Item>
     <Link to="/signup">Or Signup</Link>
    </Form.Item>
  </Form>
  );
};







export default withRouter(LoginScreen);