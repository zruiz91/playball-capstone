
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
import Container from "react-bootstrap/Container";

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
          console.log(currentUser)
        })
      }
    })
  }, [])

  return (
    //have browser router set up so header is always present and a ternary that only gives you options to log in or sign up if not logged in otherwise gives access to whole site.
    <BrowserRouter>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        {/* <img id="backgroundImage"
        class="img-fluid border mb-5"
        width="1500"
        height="200"
        alt="..."
        src="https://img.freepik.com/free-photo/blur-nature-green-park-with-bokeh-sun-light-abstract-background-copy-space-travel-adventure-environment-concept-vintage-tone-filter-color-style_1253-1107.jpg?w=1800&t=st=1670294414~exp=1670295014~hmac=bb9f4ade8fafacb292d5daf916da381c18dc7c54dce9c3bea803539e8116a22c" 
        /> */}
        <Container class="m-5">
        {!currentUser ?
        <Switch>
          {/* <Route exact path='/'>
              <Home />
            </Route> */}

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
              <EventsContainer currentUser={currentUser}/>
            </Route>


          </Switch>
        }
      </Container>
    </BrowserRouter>
  );
}

export default App;
