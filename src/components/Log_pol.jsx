import React, {useContext, useState} from 'react'
import {Form} from 'react-bootstrap'
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";
import {AuthContext} from "../context";

const Log_pol = () => {
        const {isAuth, setIsAuth} = useContext(AuthContext)
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const  login = event =>{
            event.preventDefault();
            setIsAuth(true);
            const newAuth = {
                id: Date.now(),
                email,
                password
            }
            console.log(newAuth)
            setEmail("");
            setPassword("");
        }
        return (
            <>
                <Form className='text' onSubmit={login}>

                    <label>Email address</label>
                    <MyInput
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter email"
                    />


                    <label>Password</label>
                    <MyInput
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />

                    <MyButton>
                        Sign In
                    </MyButton>

                </Form>
            </>
        )

}
export default Log_pol;