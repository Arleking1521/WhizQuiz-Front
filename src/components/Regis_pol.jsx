import React, { useRef, useState} from 'react';
import {Form} from 'react-bootstrap';
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";

const Regis_pol = ({create}) => {
        const [name, setName] = useState('');
        const [surname, setSurname] = useState('');
        const [email, setEmail] =useState('')
        const pass1 = useRef();
        const pass2 = useRef();

    const addNewUser = (e) => {
        e.preventDefault()
        const password1 = pass1.current.value;
        const password2 = pass2.current.value;
        if (name.trim() === "" || surname.trim() === "" || email.trim() === "" || password1.trim() === "" || password2.trim() === "" || password1 !== password2) {
            if (name.trim() === "") {
                window.alert("Вы не ввели имя")
            } else if (surname.trim() === "") {
                window.alert("Вы не ввели фамилию")
            } else if (email.trim() === "") {
                window.alert("Вы не ввели email")
            } else if (password1.trim() === "") {
                window.alert("Вы не ввели пароль")
            } else if (password2.trim() === "") {
                window.alert("Вы не повторили пароль")
            }else if (password1 !== password2) {
                window.alert("Введеные пароли не совпадают")
            }
            return;
        }

        const newUser = {
            id: Date.now(),
            name,
            surname,
            email,
            pass1
        }
        console.log(newUser)
        create(newUser)
        setName("");
        setSurname("");
        setEmail("");
        pass1.current.value = "";
        pass2.current.value = "";
    }

        return (
            <>
                <Form className='text'>
                    <label>Имя</label>
                    <MyInput
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="name"
                        placeholder="Введите ваше имя"
                    />
                    <label>Фамилия</label>
                    <MyInput
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                        type="surname"
                        placeholder="Введите вашу фамилию"
                    />
                    <label>Email</label>
                    <MyInput
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="Введите email"
                    />
                    <label>Пароль</label>
                    <MyInput ref={pass1} type="password" placeholder="Введите пароль"/>
                    <label>Повторите пароль</label>
                    <MyInput ref={pass2} type="password" placeholder="Повторите пароль"/>
                    <MyButton onClick={addNewUser}>
                        Зарегистрироваться
                    </MyButton>
                </Form>
            </>
        )

}

export default Regis_pol;