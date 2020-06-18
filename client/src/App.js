import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from './components/pages/Index';
import Loginpage from './components/pages/Loginpage';
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Events from './components/pages/Events';

//check for token to keep user logged in 
if (localStorage.jwtToken){
  //set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  //decode token and get user info and exp
  const decoded = jwt_decode(token);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now() /1000; //to get millisec
  if(decoded.exp < currentTime){
    //logout user
    store.dispatch(logoutUser());
    //redirect to login
    window.location.href = './Login';
  }
}



class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/login" component={Loginpage} />
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <Route path="/events" component={Events}/>
        </Switch>
      </div>
      </Provider>
    );
  }
}

export default App;