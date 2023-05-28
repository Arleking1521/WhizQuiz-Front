import React, {useContext} from 'react'
import {Form} from 'react-bootstrap'
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";
import {AuthContext} from "../context";

const Log_pol = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <>
            <Form className='text' onSubmit={login}>
                <label>Email </label>
                <MyInput type="email" placeholder="Введите email"/>
                <label>Пароль</label>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>
                    Войти
                </MyButton>

            </Form>
        </>
    )

}
export default Log_pol;