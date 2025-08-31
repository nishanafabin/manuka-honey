// src/App.js
import React from 'react';
import './App.css';

//import { Router, Route } from 'react-router-dom';
import Home from './Home';
function App() {
  
  return (
    <div className="App">
     {/* <Router>
        <Route path="/" component={<Home />} />
     </Router> */}
      <Home />
    </div>
  );
}

export default App;
