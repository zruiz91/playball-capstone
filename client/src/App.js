// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import LogInForm from './components/LogInForm';
import EventsContainer from './components/EventsContainer';
import ParksContainer from "./components/ParksContainer";

import SignUpForm from './components/SignUpForm';
import NotFound from './components/NotFound'


function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/signup">
            <SignUpForm />
          </Route>

          <Route path="/login">
            <LogInForm />
          </Route>

          <Route path="/parks">
            <ParksContainer />
          </Route>

          <Route path="/events">
            <EventsContainer />
          </Route>


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
