import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Register extends Component {
  render() {
    return (
      <form className="form-register" noValidate autoComplete="off">
        <TextField className="text-field" label="Email" variant="filled" size="small"/>
        <TextField className="text-field" label="Username" variant="filled" size="small"/>
        <TextField className="text-field" label="Password" variant="filled" size="small"/>
        <TextField className="text-field" label="Confirm Password" variant="filled" size="small"/>
        <Button variant="contained" color="primary" fullWidth={true}>
          Register
        </Button>
      </form>
    );
  }
}
