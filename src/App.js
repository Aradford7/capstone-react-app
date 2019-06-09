import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode  from 'jwt-decode'
import axios from 'axios'
//Redux
import {Provider} from 'react-redux';
import store from './redux/store';
import {SET_AUTHENTICATED} from './redux/types';
import {logoutUser, getUserData} from './redux/Actions/userActions'
//Components imports
import NavBar from './components/NavBar'
import AuthRoute from './Theme/AuthRoute'
//Layout routes
import Home from './layout/Home';
import Login from './layout/Login';
import Signup from './layout/Signup';
import ReactToMyReactApp from './layout/SocialApp/ReactToMyReactApp'
import {Codey} from './layout/Codey';
import {NoMatch} from './layout/NoMatch';


//Styles MUI
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './Theme/theme';


const theme = createMuiTheme (themeFile);
 


const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token); //will have prop exp will decode can set session time
  // console.log(decodedToken);
  //will expire less than date today
  if(decodedToken.exp*1000 <Date.now()) {
      store.dispatch(logoutUser())
      window.location.href = '/login'
  }else{
      store.dispatch({type: SET_AUTHENTICATED});
      axios.defaults.headers.common['Authorization'] = token;
      store.dispatch(getUserData());
  }
}

class App extends Component{
  render(){
    return (
      <Provider  store ={store}>
        <MuiThemeProvider theme = {theme}>
        <div className = "App">
        <Router>
          <NavBar/>
          <div className = "container">
            <Switch>
              <Route exact path="/" component={Home} />
              <AuthRoute exact path="/login" component={Login}  />
              <AuthRoute  exact path="/signup" component={Signup} />
              <Route path="/codey" component = {Codey} />
              <Route path="/reacttomyreactapp" component={ReactToMyReactApp} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        </div>
      </MuiThemeProvider>
      </Provider>
      
    );
  }
}


export default App;
