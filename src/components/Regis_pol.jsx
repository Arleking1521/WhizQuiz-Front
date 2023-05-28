import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";

export default class Regis_pol extends Component {
    render() {
        return (
            <>
                <Form className='text'>
                    <label>Имя</label>
                    <MyInput type="name" placeholder="Введите ваше имя"/>
                    <label>Фамилия</label>
                    <MyInput type="surname" placeholder="Введите вашу фамилию"/>
                    <label>E-mail</label>
                    <MyInput type="email" placeholder="Введите вашу почту"/>
                    <label>Пароль</label>
                    <MyInput type="password" placeholder="Придумайте надежный пароль"/>
                    <label>Повторите пароль</label>
                    <MyInput type="password" placeholder="Повторите пароль"/>
                    <hr/>
                    <MyButton>
                        Зарегистрироваться
                    </MyButton>
                </Form>
            </>
        )
    }
}
