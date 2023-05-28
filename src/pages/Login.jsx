import React, {Component, useState} from 'react'
import {Col, Container, Nav, Row, Tab,} from 'react-bootstrap'
import Log_pol from '../components/Log_pol'
import Regis_pol from '../components/Regis_pol'
import '../style/Login.css'
import CommentsPage from "./CommentsPage";

const Login = () => {

        const [isClicked, setIsClicked] = useState(false);

        const handleClick = () => {
            setIsClicked(true);
        };
        return (
            <>
                <Container className='Log_cont'>
                    <div>
                        <Tab.Container id="Tabs-login-register" defaultActiveKey='login'>
                            <Col>
                                <Row className='row_t'>
                                    <Nav variant='pills' className=' mt-2 row_t'>
                                        <Nav.Item className='tabsIt'>
                                            <Nav.Link onClick={handleClick} eventKey="login"> Log in</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='tabsIt'>
                                            <Nav.Link eventKey="register">Registration</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Row>
                                <Row>
                                    <Tab.Content className='content'>
                                        <Tab.Pane eventKey='login'>
                                            <Log_pol/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='register'>
                                            <Regis_pol/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Row>
                            </Col>
                        </Tab.Container>
                    </div>
                </Container>

            </>
        );
    };
export default Login;