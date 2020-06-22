import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from './components/pages/Index';
import Loginpage from './components/pages/Loginpage';
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';
import Dashboard from './components/dashboard/Dashboard';
import AuthLayout from './layout/AuthLayout';
import PublicLayout from './layout/PublicLayout';

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

const pages =[
  {
    exact:true,
    path:'/',
    component:Index,
    layout:PublicLayout
  },
  {
    exact:true,
    path:'/login',
    component:Loginpage,
    layout:PublicLayout
  },
  {
    exact:true,
    path:[
      '/dashboard',
      '/dashboard/events',
      '/dashboard/help'
    ],
    component:Dashboard,
    layout:AuthLayout
  }
]



class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <Switch>
        {pages.map(
            ({exact,path,component:Component,layout:Layout},index)=>{

              return(
                <Route
                  key={index}
                  exact={exact}
                  path={path}
                  render={props=>{

                    return (
                      <Layout >
                        <Component {...props}/>
                      </Layout>
                    )
                  }}

                />
              )
            }
          )}
        </Switch>
      </div>
      </Provider>
    );
  }
}

export default App;