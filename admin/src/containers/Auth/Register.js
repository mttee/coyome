import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default class Register extends Component {

  constructor(props){
    super(props);
    this.state={
      rememberMe: true,
      showPassword: false,
      showConfirmPassword: false
    }
  }

  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    })
  }

  handleClickShowPassword = () =>{
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  handleClickShowConfirmPassword = () =>{
    this.setState({
      showConfirmPassword: !this.state.showConfirmPassword
    })
  }

  render() {
    return (
      <form className="form-register" noValidate autoComplete="off">
        <TextField className="text-field" label="Email" variant="outlined" size="small"/>
        <TextField className="text-field" label="Username" variant="outlined" size="small"/>
        <FormControl className="text-field" variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            className="input-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  edge="end"
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl className="text-field" variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            className="input-password"
            type={this.state.showConfirmPassword ? 'text' : 'password'}
            value={this.state.confirmPassword}
            onChange={(e) => this.handleChange(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowConfirmPassword}
                  edge="end"
                >
                  {this.state.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <Button variant="contained" color="primary" fullWidth={true}>
          Register
        </Button>
      </form>
    );
  }
}
