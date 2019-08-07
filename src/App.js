import React from 'react';
import './App.css';
// import {useState} from 'react'
import Home from './page/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NormalLoginForm from './page/FormArea';

function App() {
  // const todos = useState([])

  return (
    <div className="App">
      <Router mode="hash">
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={NormalLoginForm} />
      </Router>
    </div>
  );
}

export default App;
