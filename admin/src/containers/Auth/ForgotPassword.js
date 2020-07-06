import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class ForgotPassword extends Component {
    render() {
        return (
            <form className="form-forgotPassword" noValidate autoComplete="off">
                <TextField className="text-field" label="Email" variant="filled" size="small"/>
                <Button variant="contained" color="primary" fullWidth={true}>
                    Forgot Password
                </Button>
            </form>
        )
    }
}
