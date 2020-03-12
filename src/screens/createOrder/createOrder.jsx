import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Spin,
  message,
  Row,
  Col,
  Select
} from "antd";
import {
  LoadingOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import "./createOrder.css";
const { Option } = Select;
const { TextArea } = Input;












const JunkType = [
  { value: "plastic", label: "Plastic" },
  { value: "rapper", label: "Rapper" },
  { value: "shoppers", label: "Shoppers" },
  { value: "paper", label: "Paper" },
  { value: "wood", label: "Wood" },
  { value: "plastic bags ", label: "Plastic bags " },
  { value: "glass", label: "Glass" },
  { value: "steel", label: "Steel" },
  { value: "tyre tube", label: "Tyre tube" },
  { value: "iron", label: "Iron" },
  { value: "tins", label: "Tins" },
]



const CreateOrder = props => {
  //  const [progress, setProgress] = useState(0);
  const { TextArea } = Input;



  // useEffect(() => { });
  const onFinish = values => {
    console.log('Success:', values);

    let data = {

      // "userId":"5e52d23b6259881be4118a64",
      name: values.name,
      type: values.type,
      amount: values.amount,
      address: values.address,
      email: values.email,
      status: "pending",
      userId: localStorage.getItem('_id')

    }
    console.log(data);
    axios({
      method: "post",
      url: `http://localhost:8000/createorder`,
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "X-User-Email": readLocalStorage("X-User-Email"),
        // "X-User-Token": readLocalStorage("X-User-Token")
      }
    })
      .then(response => {

        if (response.status === 200) {
          props.history.push('/orders/view')
        }
        console.log(response);
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
          <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ textAlign: "center" }}>
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
              message: "Please input your name!"
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
          label="Junk Quantity"
          name="type"
          rules={[
            {
              required: true,
              message: "Please select junk quantity!"
            }
          ]}
        >
          <Select>
            {/* <Option value="gold">Gold</Option>
        <Option value="silver">Silver</Option>
        <Option value="plastic">Plastic</Option> */}

            {JunkType.map((item, index) =>
              // <ListItem key={number.toString()}
              //           value={number} />


              <Option value={item.value} id={index}>{item.label}</Option>

            )}



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
            <Option value="10 to 20">1 to 10</Option>
            <Option value="10 to 20">10 to 20</Option>
            <Option value="20 to 30">20 to 30</Option>
            <Option value="30 to 40">30 to 40</Option>
            <Option value="40 to 50">50 to 60</Option>
            <Option value="40 to 50">60 to 100</Option>
          </Select>
        </Form.Item>
        <Form.Item name='email' label="Email" rules={[{ type: 'email', message: "Not a valid email" }, { required: true, message: "Please write valid email address" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address!"
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

export default withRouter(CreateOrder);