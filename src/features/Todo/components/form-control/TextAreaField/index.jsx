import { TextareaAutosize } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

TextAreaField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function TextAreaField(props) {
    const { form, name, label, disabled, className, placeholder } = props
    const { errors } = form
    const hasError = errors[name]

    return (
        <Controller
            name={name}
            control={form.control}
            as={TextareaAutosize}
            fullWidth
            variant="outlined"
            margin="normal"
            className={className}
            label={label}
            disabled={disabled}
            error={!!hasError}
            helperText={errors[name]?.message}
            placeholder={placeholder}
            rowsMin={7}>
        </Controller>
    );

}

export default TextAreaField;