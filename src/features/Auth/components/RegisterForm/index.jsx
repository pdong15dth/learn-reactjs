import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import InputField from 'features/Todo/components/form-control/inputField';
import PasswordField from 'features/Todo/components/form-control/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";


RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(2)
    },
    title: {
        textAlign: 'center',
        margin: theme.spacing(2)
    },
    avatar: {
        margin: '0 auto',
        background: 'red',
    },
    submit: {
        margin: theme.spacing(2, 0)
    },

}))
function RegisterForm(props) {
    const classes = useStyles()
    const schema = yup.object().shape({
        fullName: yup.string()
            .required('Please enter your full name')
            .test('nhap it nhan 2 tu', 'Vui long nhap it nhat 2 tu', (values) => {
                return values.split(' ').length >= 2
            }),
        email: yup.string()
            .required('Please enter your Email')
            .email('Vui long nhap dung dia chi Email'),
        password: yup.string()
            .required('Please enter your Password')
            .min(6, 'It nhat 6 ky tu nha ban'),
        retypepassword: yup.string()
            .required('Please enter your full name')
            .oneOf([yup.ref('password')], 'Password khong trung khop'),
    });

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypepassword: ''
        },
        resolver: yupResolver(schema)
    });
    const { isSubmit } = form.formState()

    const handleSubmit = (values) => {
        const { onSubmit } = props
        if (onSubmit) {
            onSubmit(values)
        }
        form.reset()
    };
    return (
        <div>
            <Avatar className={classes.avatar}><LockOpenOutlined></LockOpenOutlined></Avatar>
            <Typography className={classes.title} component="h3" variant="h5">Create Account</Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form}></InputField>
                <InputField name="email" label="Email" form={form}></InputField>
                <PasswordField name="password" label="Password" form={form}></PasswordField>
                <PasswordField name="retypepassword" label="Retype Password" form={form}></PasswordField>
                <Button type='submit' className={classes.submit} fullWidth variant="contained" color="primary">
                    Create Account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
