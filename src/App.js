import React from 'react';
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Main from './containers/Main/Main'


function App () {

  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          component={Main}
        >
        </Route>
        {/* <Route
          exact
          path='/soundtrack'
          component={SoundTrack}
        >
        </Route>
        <Route
          exact
          path='/inspiration'
          component={Inspiration}
        >
        </Route>
        <Route
          exact
          path='/tools'
          component={Tools}
        >
        </Route>
        <Route
          path='/'
          component={NotFound}
        >
        </Route> */}
      </Switch>
  </div>
  );
  
}

export default App;