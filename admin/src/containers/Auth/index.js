import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faRegistered,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";

import Login from "./Login";
import Resgister from "./Register";
import ForgotPassword from "./ForgotPassword";

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
          <Typography component={"span"} variant={"body2"}>
            {children}
          </Typography>
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
      <TabPanel value={value} index={0} className="tabpanel">
        <Login />
      </TabPanel>
      <TabPanel value={value} index={1} className="tabpanel">
        <Resgister />
      </TabPanel>
      <TabPanel value={value} index={2} className="tabpanel">
        <ForgotPassword />
      </TabPanel>
    </div>
  );
}

export default class index extends Component {
  render() {
    return (
      <div className="Auth">
        <div className="login-card">
          <div className="card-left">
            <div className="logo">
              <img src="/img/logo/logo-demo.png" alt="logo" />
            </div>
          </div>
          <div className="card-right">
            <ScrollableTabsButtonForce />
          </div>
        </div>
      </div>
    );
  }
}
