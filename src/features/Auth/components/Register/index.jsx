import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { register } from '../../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';

Register.propTypes = {

};


function Register(props) {

    const dispatch = useDispatch()
    const handleSubmit = async (values) => {
        try {
            values.username = values.email
            console.log('is value: ', values)
            const action = register(values)
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction)
            console.log('new user: ', user)
        } catch (error) {
            console.log('error: ', error)
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}></RegisterForm>
        </div>
    );
}

export default Register;