import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Results from './Results';
import Navbar from './Navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Results} />
        </Switch>
      </div>
    );
  }
}

export default App;
