import React, { Component } from 'react';
import Login from './screen/Login';
import Desh from './screen/Desh';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
          <Router>
     <Route path="/" exact component={Login}/>
     <Route path="/desh" exact component={Desh}/>

              </Router>
    );
  }
}

export default App;
