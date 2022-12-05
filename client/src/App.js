
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import LogInForm from './components/LogInForm';
import EventsContainer from './components/EventsContainer';
import EventDetailsPage from './components/EventDetailsPage';
import ParksContainer from './components/ParksContainer';
import UserPage from './components/UserPage';
import SignUpForm from './components/SignUpForm';
import NotFound from './components/NotFound'
// import Image1 from './components/Image1';

function App() {
  const [currentUser, setCurrentUser] = useState(false)

  //have function to set current userbelow and a useEffect to fetch authorized user
  const updateUser = (user) => setCurrentUser(user)

  useEffect(() =>{
    fetch('/authorized_user')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)
        })
      }
    })
  }, [])

  return (
    //have browser router set up so header is always present and a ternary that only gives you options to log in or sign up if not logged in otherwise gives access to whole site.
    <BrowserRouter>
      <div className='App'>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        {!currentUser ?
        <Switch>
          <Route path='/login' >
              <LogInForm updateUser={updateUser}/>
            </Route>

            <Route path='/users/new'>
              <SignUpForm updateUser={updateUser}/>
            </Route>
        </Switch>:
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/users/:id'>
              <UserPage />
            </Route>

            <Route path='/parks'>
              <ParksContainer />
            </Route>

            <Route path='/events'>
              <EventsContainer />
            </Route>


          </Switch>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
