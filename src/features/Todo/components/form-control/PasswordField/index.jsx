import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';


PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props
    const { errors } = form
    const hasError = errors[name]
    const [showPassword, setShowPassword] = useState({

    });

    const handleClickShowPassword = () => {
        setShowPassword(x => !x)
    };

    return (
        <FormControl error={!!hasError} fullWidth variant='outlined' margin='normal'>
            <InputLabel htmlFor={name}>Password</InputLabel>
            <Controller
                name={name}
                id={name}
                control={form.control}
                as={OutlinedInput}
                fullWidth
                variant="outlined"
                margin="normal"
                label={label}
                disabled={disabled}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword} >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }>
            </Controller>
            <FormHelperText >{errors[name]?.message}</FormHelperText>
        </FormControl>

    );
}

export default PasswordField;