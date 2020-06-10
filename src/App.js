import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeHooks from './components/Home/HomeHooks';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'><Login /></Route>
          <Route path='/home'><HomeHooks /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
