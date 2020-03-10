import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import {
    Table, Tag, Col, Row, message
} from "antd";
import {
    LoadingOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import "./viewOrder.css";




const ViewOrder = props => {
    const [orders, setOrders] = useState([]);
    const getOrder = () => {
        const userID = localStorage.getItem('_id');
        axios({
            method: "get",
            url: `http://localhost:8000/orders/${userID}`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(response => { 
                console.log(response.data);
                setOrders(response.data);
             })
            .catch(error => {
                message.error(error.response.data)
            });
    }
    /*

_id: "5e6774e631ae9014e83532cc"
userId: "5e660984baf6f84c088bc1cd"
name: "asad"
type: "gold"
amount: "20 to 30"
address: "hbfghfghf"
email: "asad@gmail.com"
status: "pending"

*/
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: status => (
                <span>
               
                            <Tag color={status==='pending'?'red':'green'} key={status}>
                                {status.toUpperCase()}
                            </Tag>
                        
                    
                </span>
            ),
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (text, record) => (
        //         <span>
        //             <a style={{ marginRight: 16 }}>Invite {record.name}</a>
        //             <a>Delete</a>
        //         </span>
        //     ),
        // },
    ];
    // const data = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sidney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];
    useEffect(() => {
        getOrder();
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
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ textAlign: "center" }}>
                        <span className="content-title">Orders list</span>
                    </Col>
                </Row>
            </div>
            <Table columns={columns} dataSource={orders} />
        </>
    )
}



export default withRouter(ViewOrder);

