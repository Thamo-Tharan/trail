import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './componets/headercomp'
import Home from './componets/Home'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Header} />
            <Route exact path={"/home"} component={Home} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
