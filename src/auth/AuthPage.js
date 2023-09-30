import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Input, Row, Space} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {add_user} from "../store/actions/userAction";

const AuthPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const selectUser = useSelector(state => state.auth)

    const handleLoginAccount = () => {
        dispatch(add_user(username, password, true))
        // if(username.trim() !== "" & password.trim() !== ""){
        //     dispatch(add_user(username, password, true))
        //     console.log(selectUser)
        // }
        console.log(selectUser)
    }

    return (
        <>
            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <Card title='Account' style={{marginTop: 200,marginLeft: 100, width: 400}}>
                        <Space size="middle" direction="vertical" style={{display: "flex", justifyContent: "center"}}>
                            <Input placeholder='User Name' size='large' onChange={(e) => setUsername(e.target.value)}/>
                            <Input placeholder='Password' type='password' size='large' onChange={(e) => setPassword(e.target.value)}/>
                            <Button
                                onClick={handleLoginAccount}
                            >Login</Button>

                        </Space>

                    </Card>
                    <div className='ml-24 text-gray-300 mt-3'>*use any word for login</div>
                </Col>

                <Col span={8}></Col>

            </Row>

        </>
    );
};

export default AuthPage;