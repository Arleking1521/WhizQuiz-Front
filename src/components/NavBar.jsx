import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import {AuthContext} from "../context";
import MyButton from "../UI/Button/MyButton";

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () =>{
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <Navbar.Collapse id='responsive-navbar-nav' align-right>
            <div className='menu'>
                <Link to={'/home'}> ГЛАВНАЯ </Link>
                <Link to={'/rules'}> ПРАВИЛА </Link>
                <Link to={'/comments'}> ОТЗЫВЫ </Link>
            </div>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
        </Navbar.Collapse>
    );
};

export default NavBar;