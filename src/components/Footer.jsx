import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import wpp_f from '../assets/wpp.png'
import inst_f from '../assets/inst.png'
import vk_f from '../assets/vk.png'
import Logo from '../assets/logoWhizQuiz.jpg'
import {Link} from "react-router-dom";
import "../style/Footer.css"
import {ABOUT_ROUTE, COMMENTS_ROUTE, HOME_ROUTE, RULES_ROUTE} from "../utils/const";

const Footer = () => {
    return (
        <footer>
            <div className="foot">
                <div className="fir_part">
                    <div className="foot_logo"><img src={Logo} alt="" /></div>
                    <div className="li_text">
                        <p>© 2023. WhizQuiz Inc.</p>
                        <Navbar>
                            <Nav.Link as={Link} to={HOME_ROUTE}> Home </Nav.Link>|
                            <Nav.Link as={Link} to={RULES_ROUTE}> Rules </Nav.Link>|
                            <Nav.Link as={Link} to={COMMENTS_ROUTE}> Photos </Nav.Link>|
                            <Nav.Link as={Link} to={ABOUT_ROUTE}> About Us </Nav.Link>
                        </Navbar>
                    </div>
                </div>
                <div>
                    <a href="" className="soc_link"><img src={inst_f} alt="" /></a>
                    <a href="" className="soc_link"><img src={vk_f} alt="" /></a>
                    <a href="" className="soc_link"><img src={wpp_f} alt="" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;