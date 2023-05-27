import React from 'react';
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar.Collapse id='responsive-navbar-nav' align-right>
            <div className='menu'>
                <Link to={'/'}> ГЛАВНАЯ </Link>
                <Link to={'/rules'}> ПРАВИЛА </Link>
                <Link to={'/comments'}> ОТЗЫВЫ </Link>
                <Link to={'/about'}> О НАС </Link>
            </div>
        </Navbar.Collapse>
    );
};

export default NavBar;