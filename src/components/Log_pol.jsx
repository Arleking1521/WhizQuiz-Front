import React, {useContext} from 'react'
import {Form} from 'react-bootstrap'
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";
import {AuthContext} from "../context";

const Log_pol = () => {
        const {isAuth, setIsAuth} = useContext(AuthContext)
        const  login = event =>{
            event.preventDefault();
            setIsAuth(true);
        }
        return (
            <>
                <Form className='text' onSubmit={login}>

                    <label>Email address</label>
                    <MyInput type="email" placeholder="Enter email"/>


                    <label>Password</label>
                    <MyInput type="password" placeholder="Password"/>

                    <MyButton>
                        Sign In
                    </MyButton>

                </Form>
            </>
        )

}
export default Log_pol;