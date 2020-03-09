import React from "react";
import { withRouter, Link } from "react-router-dom";
import {
    Table, Tag ,Col,Row
} from "antd";
import {
    LoadingOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import "./viewOrder.css";




const viewOrder = props => {

const userId = localStorage.getItem('_id');

    const getOrder = ()=>{
        axios({
            method: "get",
            url: `http://localhost:3000/orders/${userID}`,
            data: data,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            }
          })
            .then(response => {
              // if(response.status===200){
              //     props.history.push('/login')
              // }
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
        }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a style={{ marginRight: 16 }}>Invite {record.name}</a>
                    <a>Delete</a>
                </span>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
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
            <span className="content-title">Orders list</span>
          </Col>
        </Row>
      </div>
        <Table columns={columns} dataSource={data} />
    </>
    )
}



export default withRouter(viewOrder);

