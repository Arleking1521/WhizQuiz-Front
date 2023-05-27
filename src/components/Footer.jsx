import React from 'react';
import {Navbar} from "react-bootstrap";
import wpp_f from '../assets/wpp.png'
import inst_f from '../assets/inst.png'
import vk_f from '../assets/vk.svg'
import Logo from '../assets/logoWhizQuiz.jpg'
import {Link} from "react-router-dom";
import "../style/Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="foot">
                <div className="fir_part">
                    <div className="foot_logo"><img src={Logo} alt=""/></div>
                    <div className="li_text">
                        <p>© 2023. WhizQuiz.</p>
                        <div>
                            <Link to={'/'}> Главная </Link>|
                            <Link to={'/rules'}> Правила </Link>|
                            <Link to={'/comments'}> Отзывы </Link>|
                            <Link to={'/about'}> О нас </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="https://instagram.com/whizquiz.almaty?igshid=MzRlODBiNWFlZA==" className="soc_link"><img
                        src={inst_f} alt=""/></a>
                    <a href="https://vk.com/whiz.quiz" className="soc_link"><img src={vk_f} alt=""/></a>
                    <a href="https://api.whatsapp.com/send/?phone=77079980268" className="soc_link"><img src={wpp_f}
                                                                                                         alt=""/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;