import React from "react";
// import logo from './logo.svg';
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { method, LocalStorageKeys } from "./constants/index";
import Layout from "./components/layouts/";

import Auth from "./containers/Auth/index";

var getTokenLocalStorage = () => {
  return localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN) ? true : false;
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        getTokenLocalStorage() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !getTokenLocalStorage() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute path="/login">
            <Auth />
          </PublicRoute>
          <PrivateRoute path="/">
            <Layout />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
