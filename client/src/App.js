// client/src/components/App.js
// import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import LogInForm from './components/LogInForm';
import EventsContainer from './components/EventsContainer';
import ParksContainer from "./components/ParksContainer";
import ParkDetailsPage from "./components/ParkDetailsPage";
import SignUpForm from './components/SignUpForm';
import NotFound from './components/NotFound'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>

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

          <Route path='/parks/:id'>
            <ParkDetailsPage />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
