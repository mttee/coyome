import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {Facebook, Twitter} from '@material-ui/icons';
import {method, LocalStorageKeys} from "../../constants/index"
import apiCall from "../../utils/util"
import { createHashHistory } from 'history'

export const history = createHashHistory()
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      rememberMe: true,
      showPassword: false
    }
  }

  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    if(e.target.name === "rememberMe"){
      this.setState({
        [name]: e.target.checked,
      })
    }
    else{
      this.setState({
        [name]: value,
      })
    }
  }

  Login = (evt) => {
    evt.preventDefault();
    apiCall(method.POST, "api/account/login", this.state).then((res) => {
      localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, res.data);
      history.push("/");
    })
  };

  handleClickShowPassword = () =>{
    this.setState({
      showPassword: !this.state.showPassword
    })
  }


  render() {
    console.log(this.state)
    return (
      <form className="form-login" noValidate autoComplete="off" alignitems="center" method="post" onSubmit={this.Login}>
        <TextField className="text-field" label="Username" variant="outlined" size="small" name="username" onChange={(e) => this.handleChange(e)}/>
        <FormControl className="text-field" variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            name="password"
            className="input-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password || ''}
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
        <FormControlLabel
          control={
            <Checkbox checked={this.state.rememberMe} onChange={(e) => this.handleChange(e)} name="rememberMe" color="primary"/>
          }
          label="Remember Me"
          className="remember-me"
        />
        <Button variant="contained" color="primary" fullWidth={true} type="Submit">
          Login
        </Button>
        <div className="social-login">
          <Grid container>
            <Grid item xs={12} className="title">
              Or login with
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button variant="contained" className="button-facebook" startIcon={<Facebook />} fullWidth={true}>
                Facebook
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" className="button-twitter" startIcon={<Twitter />} fullWidth={true}>
                Twitter
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    );
  }
}
