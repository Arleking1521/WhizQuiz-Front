import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import Logo from '../assets/logoWhizQuiz.jpg'
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";

export default class Log_pol extends Component {
    render() {
        return (
            <>
                <Form className='text'>
                    <label>E-mail</label>
                    <MyInput type="email" placeholder="Введите вашу почту"/>
                    <label>Пароль</label>
                    <MyInput type="password" placeholder="Пароль"/>
                    <MyButton>Войти</MyButton>
                </Form>
            </>
        )
    }
}
