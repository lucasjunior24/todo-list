import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// const history = require('istory').createBrowserHistory

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './template/Custon.css'
// import './App.css';

import Menu from './template/Menu'
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className="container"> 
        <Menu />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
