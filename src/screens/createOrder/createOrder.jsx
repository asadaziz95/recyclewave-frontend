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
  Icon
} from "antd";
import {
  LoadingOutlined,
} from '@ant-design/icons';



import "./createOrder.css";


const createOrder = props => {
  const [progress, setProgress] = useState(0);
  const { TextArea } = Input;


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
  useEffect(() => { });

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
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            style={{ marginBottom: 20 }}
          >
            <Breadcrumb className="breadcrums-styling">
              <Breadcrumb.Item>
                {" "}
                <Link to="/projects">Projects</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                New Project
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
          label="Project Name"
          name="projectName"
          rules={[
            {
              required: true,
              message: "Please input your project name!"
            },
            {
              min: 3,
              message: "Project name should be atleast 3 character!"
            },
            {
              max: 25,
              message: "Project name  should not be greater then 25 character!"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{ width: 150 }}>
            Create Project
          </Button>

          <Button style={{ marginLeft: 10 }} onClick={() => moveBack()}>Cancel</Button>
        </Form.Item>


      </Form>
    </>
  );
};

export default withRouter(createOrder);