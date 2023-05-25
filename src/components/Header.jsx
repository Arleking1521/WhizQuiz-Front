import React from 'react';

import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import wpp from '../assets/wpp_w.png'
import inst from '../assets/inst_w.png'
import vk from '../assets/vk_w.png'

import "../style/Header.css"
import {ABOUT_ROUTE, COMMENTS_ROUTE, HOME_ROUTE, RULES_ROUTE} from "../utils/const";

const Header = () => {
    return (

            <Navbar collapseOnSelect expand="md" className='header' >
                <Container className='top'>
                    <div className='socmed'>
                        <div className="wpp">
                            <img src={wpp} className="wpp_img" />
                            <a href="">
                                OUR WHATSAPP
                            </a>
                        </div>
                        <div className="insta">
                            <img src={inst} className="insta_img" />
                            <a href="">
                                OUR INSTAGRAM
                            </a>
                        </div>
                        <div className="vk">
                            <img src={vk} className="vk_img" />
                            <a href="">
                                OUR VK
                            </a>
                        </div>
                    </div>
                    <div className='main_m'>
                        <div>
                            <Navbar.Brand href="/" >
                                <div>
                                    <p className='h-name'>WHIZ</p>
                                    <p className='h-name'>QUIZ</p>
                                </div>
                            </Navbar.Brand>
                        </div>
                        <div>
                            <Navbar.Collapse id='responsive-navbar-nav' align-right>
                                <Nav className='menu'>
                                    <Nav.Link as={Link} to={HOME_ROUTE} > HOME </Nav.Link>
                                    <Nav.Link as={Link} to={RULES_ROUTE}> RULES </Nav.Link>
                                    <Nav.Link as={Link} to={COMMENTS_ROUTE}> PHOTOS </Nav.Link>
                                    <Nav.Link as={Link} to={ABOUT_ROUTE}> ABOUT US </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    </div>
                </Container>
            </Navbar>





    );
};

export default Header;