// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import EventForm from "./components/EventForm";
import Header from './components/Header';
import LogInForm from './components/LogInForm';
import SignUpForm from './components/SignUpForm';
import ParksContainer from "./components/ParksContainer";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      <EventForm/>
      <LogInForm/>
      <SignUpForm/>
      <ParksContainer />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
