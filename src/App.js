import React from 'react';
import './App.css';
import Home from './page/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NormalLoginForm from './page/FormArea';
import Logout from './page/Logout'

function App() {
  return (
    <div className="App">
      <Router mode="hash">
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={NormalLoginForm} />
        <Route path="/logout" exact component={Logout}/>
      </Router>
    </div>
  );
}

export default App;
