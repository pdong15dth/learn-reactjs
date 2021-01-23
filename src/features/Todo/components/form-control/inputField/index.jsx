import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled, className } = props
    const { errors } = form
    const hasError = errors[name]
    return (
        <Controller
            name={name}
            control={form.control}
            as={TextField}
            // fullWidth
            // variant="outlined"
            margin="normal"
            className={className}
            label={label}
            disabled={disabled}
            error={!!hasError}
            helperText={errors[name]?.message}>
        </Controller>
    );
}

export default InputField;