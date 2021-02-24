import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import React from "react";
import Navigation from './components/Navigation';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Navigation from './components/Navigation';


function App() {
  return (
    <div className="row">
      <div className="col-2">
        <Navigation />
      </div>
      <div className="col-10">
        <div className="row">
          <div className="col">
            <Header />
          </div>
          <div className="row">
            <Body />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
