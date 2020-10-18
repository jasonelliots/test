import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'; 
import './App.css';

// component imports
import Home from './components/Home';
import UnloggedNav from './components/UnloggedNav';
import LoggedNav from './components/LoggedNav';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/login'>
          <UnloggedNav />
          <Login />
        </Route>

        <Route path='/register'>
          <UnloggedNav />
          <Register />
        </Route>
        
        <PrivateRoute path='/dashboard'>
        <UnloggedNav />
          <LoggedNav />
          <Dashboard />
        </PrivateRoute>

      </Switch>
    </div>
  );
}

export default App;
