import React from 'react';
import './App.css';
// import {useState} from 'react'
import Home from './page/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NormalLoginForm from './page/FormArea';
/* <Router>
        <div>
          <Link to="/">首页</Link>
          <Link to="/about">About</Link>
        </div>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
      </Router> */


function App() {
  // const todos = useState([])

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={NormalLoginForm} />
      </Router>
    </div>
  );
}

export default App;
