import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AppComp from './components/AppComp'
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import { AuthProvider } from './authentication/Auth';
import PrivateRoute from './authentication/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/create/todo" component={AppComp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
