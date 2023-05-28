import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";

export default class Regis_pol extends Component {
    render() {
        return (
            <>
                <Form className='text'>
                    <label>Имя</label>
                    <MyInput type="name" placeholder="Введите ваше имя"/>
                    <label>Фамилия</label>
                    <MyInput type="surname" placeholder="Введите вашу фамилию"/>
                    <label>Email</label>
                    <MyInput type="email" placeholder="Введите email"/>
                    <label>Пароль</label>
                    <MyInput type="password1" placeholder="Введите пароль"/>
                    <label>Повторите пароль</label>
                    <MyInput type="password2" placeholder="Повторите пароль"/>
                    <MyButton>
                        Зарегистрироваться
                    </MyButton>
                </Form>
            </>
        )
    }
}
