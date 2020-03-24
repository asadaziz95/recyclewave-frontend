import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { Table, Tag, Col, Row, message, Select } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import "./viewOrder.css";

const { Option } = Select;

const ViewOrder = props => {
  const [orders, setOrders] = useState([]);
  const [transporters, setTransporters] = useState([]);
  const handleChange=(value)=> {
    console.log(`selected ${value}`);
  }
  const getOrder = () => {
    const userID = localStorage.getItem("_id");
    axios({
      method: "get",
      url: `http://localhost:8000/orders/${userID}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response.data);
        setOrders(response.data);
      })
      .catch(error => {
        message.error(error.response.data);
      });
  };
  const getTransporters = () => {
    const userID = localStorage.getItem('_id');
    axios({
        method: "get",
        url: `http://localhost:8000/transporters/${userID}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
        .then(response => { 
            console.log(response.data);
            setTransporters(response.data);
         })
        .catch(error => {
            message.error(error.response.data)
        });
}
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: text => <a>{text}</a>
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: status => (
        <span>
          <Tag color={status === "pending" ? "red" : "green"} key={status}>
            {status.toUpperCase()}
          </Tag>
        </span>
      )
    },
    {
      title: "Assign(Orders)",
      key: "action",
      render: (text, record) => (
        <span>
          {/* <a style={{ marginRight: 16 }}>Invite {record.name}</a>
                    <a>Delete</a> */}
     <Select 
    //  defaultValue="lucy"
    onChange={handleChange} 
     style={{ width: 120 }}>
   {transporters.map((transporter) =>
    <Option value={transporter._id}>{transporter.email}</Option>
      )}
      {/* <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option> */}
    </Select>
        </span>
      )
    }
  ];
  useEffect(() => {
    getOrder();
    getTransporters();
  }, []);
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
            style={{ textAlign: "center" }}
          >
            <span className="content-title">Orders list</span>
          </Col>
        </Row>
      </div>
      <Table columns={columns} dataSource={orders} />
    </>
  );
};

export default withRouter(ViewOrder);
