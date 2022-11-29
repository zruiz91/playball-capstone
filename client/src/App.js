// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch("/parks")
      .then((r) => r.json())
      .then(setParks);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {parks.length()}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
