import React from 'react';

import {Container, Navbar} from "react-bootstrap";
import wpp from '../assets/wpp_w.png'
import inst from '../assets/inst_w.png'
import vk from '../assets/vk_w.png'

import "../style/Header.css"
import NavBar from "./NavBar";

const Header = () => {
    return (

        <Navbar collapseOnSelect expand="md" className='header'>
            <Container className='top'>
                <div className='socmed'>
                    <div className="wpp">
                        <img src={wpp} className="wpp_img"/>
                        <a href="https://api.whatsapp.com/send/?phone=77079980268">
                            WHATSAPP
                        </a>
                    </div>
                    <div className="insta">
                        <img src={inst} className="insta_img"/>
                        <a href="https://instagram.com/whizquiz.almaty?igshid=MzRlODBiNWFlZA==">
                            INSTAGRAM
                        </a>
                    </div>
                    <div className="vk">
                        <img src={vk} className="vk_img"/>
                        <a href="https://vk.com/whiz.quiz">
                            VK
                        </a>
                    </div>
                </div>
                <div className='main_m'>
                    <div>
                        <Navbar.Brand href="/">
                            <div>
                                <p className='h-name'>WHIZ</p>
                                <p className='h-name'>QUIZ</p>
                            </div>
                        </Navbar.Brand>
                    </div>
                    <div>
                        <NavBar/>
                    </div>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                </div>
            </Container>
        </Navbar>


    );
};

export default Header;