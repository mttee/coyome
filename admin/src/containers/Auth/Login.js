import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faRegistered,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {Facebook, Twitter} from '@material-ui/icons';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="auth-tabs">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            className="auth-tab"
            label="Login"
            icon={<FontAwesomeIcon icon={faSignInAlt} />}
            {...a11yProps(0)}
          />
          <Tab
            className="auth-tab"
            label="Register"
            icon={<FontAwesomeIcon icon={faRegistered} />}
            {...a11yProps(1)}
          />
          <Tab
            className="auth-tab"
            label="Forgot Password"
            icon={<FontAwesomeIcon icon={faUnlockAlt} />}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form className="form-login" noValidate autoComplete="off" alignItems="center">
          <TextField
            className="text-field"
            label="Username"
            variant="filled"
            size="small"
          />
          <TextField
            className="text-field"
            label="Password"
            variant="filled"
            size="small"
          />
          <Button variant="contained" color="primary" fullWidth="true">
            Login
          </Button>
          <div className="social-login">
          <Grid container>
          <Grid item xs={12} className="title">Or login with</Grid>
          </Grid>
          <Grid container spacing={3}>
          <Grid item xs={6}>
          <Button
              variant="contained"
              className="button-facebook"
              startIcon={<Facebook />}
              fullWidth="true"
            >
              Facebook
            </Button>
          </Grid>
          <Grid item xs={6}>
          <Button
              variant="contained"
              className="button-twitter"
              startIcon={<Twitter />}
              fullWidth="true"
            >
              Twitter
            </Button>
          </Grid>
            </Grid>
            
            
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form className="form-register" noValidate autoComplete="off">
          <TextField
            className="text-field"
            label="Email"
            variant="filled"
            size="small"
          />
          <TextField
            className="text-field"
            label="Username"
            variant="filled"
            size="small"
          />
          <TextField
            className="text-field"
            label="Password"
            variant="filled"
            size="small"
          />
          <TextField
            className="text-field"
            label="Confirm Password"
            variant="filled"
            size="small"
          />
          <Button variant="contained" color="primary" fullWidth="true">
            Register
          </Button>
        </form>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <form className="form-forgotPassword" noValidate autoComplete="off">
          <TextField
            className="text-field"
            label="Email"
            variant="filled"
            size="small"
          />
          <Button variant="contained" color="primary" fullWidth="true">
            Forgot Password
          </Button>
        </form>
      </TabPanel>
    </div>
  );
}

export default class Login extends Component {
  render() {
    return (
      <div className="Auth">
        <div className="login-card">
          <div className="card-left">
            <img src="img/login-image.jpg" class="img-fluid logo" alt="" />
          </div>
          <div className="card-right">
            <ScrollableTabsButtonForce />
          </div>
        </div>
      </div>
    );
  }
}
