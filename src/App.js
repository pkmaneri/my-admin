import './App.css';
import React from "react";
import Navigation from './components/Navigation';
import Body from './components/Body';
import {
  BrowserRouter as Router
} from "react-router-dom";



function App() {
  return (
    <Router>

    <div className="row">
      <div className="col-2">
        <Navigation />
      </div>
      <div className="col-10">
        <Body/>
      </div>
    </div>
    </Router>
  );
}

export default App;
