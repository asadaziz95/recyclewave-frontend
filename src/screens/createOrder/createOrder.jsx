import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  Button,
  Spin,
  message,
  Row,
  Col,
  Breadcrumb,
  Progress,
  DatePicker,
  Icon,
  Select
} from "antd";
import {
  LoadingOutlined,
} from '@ant-design/icons';

import "./createOrder.css";
const { Option } = Select;
const { TextArea } = Input;





const createOrder = props => {
//  const [progress, setProgress] = useState(0);
  const { TextArea } = Input;



 // useEffect(() => { });
  const onFinish = values => {
    if(values){
   
      console.log(values);
    }
  };

  const onFinishFailed = errorInfo => {
  };

  
  const moveBack = () => {
    props.history.goBack()
  }
  

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 20,
        offset: 8
      }
    }
  };
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 80, color: "#A0EDF9" }} />
  );

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
          <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{textAlign:"center"}}>
            <span className="content-title">New Project</span>
          </Col>
        </Row>
      </div>
      <Form
        {...formItemLayout}
        className="add-new-project-form"
        hideRequiredMark
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your project name!"
            },
            {
              min: 3,
              message: "Name should be atleast 3 character!"
            },
            
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
        label="Junk type"  
        name="type"
        rules={[
          {
            required: true,
            message: "Please select junk type!"
          }
        ]}
        >
      <Select>
        <Option value="gold">Gold</Option>
        <Option value="silver">Silver</Option>
        <Option value="plastic">Plastic</Option>
      </Select>
    </Form.Item>

    <Form.Item 
        label="Junk amount"  
        name="amount"
        rules={[
          {
            required: true,
            message: "Please select amount!"
          }
        ]}
        >
      <Select>
        <Option value="10 to 20">10 to 20</Option>
        <Option value="20 to 30">20 to 30</Option>
        <Option value="30 to 40">30 to 40</Option>
        <Option value="40 to 50">50 to 60</Option>
      </Select>
    </Form.Item>
        <Form.Item name='email' label="Email" rules={[{ type: 'email',message:"Not a valid email" },{required:true,message:"Please write valid email address"}]}>
        <Input />
      </Form.Item>
      <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address name!"
            },
            {
              min: 3,
              message: "Address should be atleast 3 character!"
            },
            
          ]}
        >
         <TextArea rows={3} />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{ width: 150 }}>
            Post Order
          </Button>

          <Button style={{ marginLeft: 10 }} onClick={() => moveBack()}>Cancel</Button>
        </Form.Item>


      </Form>
    </>
  );
};

export default withRouter(createOrder);