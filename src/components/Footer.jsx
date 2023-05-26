import React from 'react';
import {Navbar} from "react-bootstrap";
import wpp_f from '../assets/wpp.png'
import inst_f from '../assets/inst.png'
import vk_f from '../assets/vk.png'
import Logo from '../assets/logoWhizQuiz.jpg'
import {Link} from "react-router-dom";
import "../style/Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="foot">
                <div className="fir_part">
                    <div className="foot_logo"><img src={Logo} alt="" /></div>
                    <div className="li_text">
                        <p>© 2023. WhizQuiz Inc.</p>
                        <div>
                            <Link to={'/home'}> Home </Link>|
                            <Link to={'/rules'}> Rules </Link>|
                            <Link to={'/comments'}> Comments </Link>|
                            <Link to={'/about'}> About Us </Link>
                        </div>
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