import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import {
    Table, Tag, Col, Row, message
} from "antd";
import {
    LoadingOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import "./viewTransporters.css";




const ViewOrder = props => {
    const [transporters, setTransporters] = useState([]);
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
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text[0].firstName +' '+text[0].lastName}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
      
    ];

    useEffect(() => {
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
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ textAlign: "center" }}>
                        <span className="content-title">Transporter list</span>
                    </Col>
                </Row>
            </div>
            <Table columns={columns} dataSource={transporters} />
        </>
    )
}



export default withRouter(ViewOrder);

