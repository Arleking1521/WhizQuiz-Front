import React from 'react';
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar.Collapse id='responsive-navbar-nav' align-right>
            <div className='menu'>
                <Link to={'/home'} > HOME </Link>
                <Link to={'/rules'}> RULES </Link>
                <Link to={'/comments'}> COMMENTS </Link>
                <Link to={'/about'}> ABOUT US </Link>
            </div>
        </Navbar.Collapse>
    );
};

export default NavBar;