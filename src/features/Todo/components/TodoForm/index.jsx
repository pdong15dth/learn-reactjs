import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../form-control/inputField';


TotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TotoForm(props) {

    const schema = yup.object().shape({
        title: yup.string()
            .required('Vui Long nhap Title')
            .min(5, 'Title Khong Du do dai quy dinh')
            .max(20, 'Title vuot qua ky tu quy dinh'),
        status: yup.string()
            .required('Vui Long nhap Title'),
    });

    const form = useForm({
        defaultValues: {
            title: '',
            status: ''
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props
        if (onSubmit) {
            onSubmit(values)
        }
        form.reset()
    };
    return (
        <div>
            TodoForm
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="title" label="Todo" form={form}></InputField>
                <hr></hr>
                <InputField name='status' label='Status' form={form}></InputField>
            </form>
        </div>
    );
}

export default TotoForm;
