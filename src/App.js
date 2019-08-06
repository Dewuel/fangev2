import React from 'react';
import './App.css';
// import {useState} from 'react'
import Home from './page/Home'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
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
      <Home />
    </div>
  );
}

export default App;
