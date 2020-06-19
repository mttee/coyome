import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Layout from './components/layouts/'

import Login from './containers/Auth/Login'



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Layout/> */}

      <Login/>

    </div>
  );
}

export default App;
