import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components imports
import NavBar from './components/NavBar/NavBar'
//Layout routes
import {Home} from './layout/Home';
import Login from './layout/Login/Login';
import {Signup} from './layout/Signup';
import ReactToMyReactApp from './layout/SocialApp/ReactToMyReactApp'
import {Codey} from './layout/Codey';
import {NoMatch} from './layout/NoMatch';


//Styles MUI
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme ({
    palette: {
      primary: {
        light: '#c786d3',
        main: '#ba68c8',
        dark : '#82488c',
        constrastText: "#fff",
      },
      secondary: {
        light: '#ff99bb',
        main: '#ff80ab',
        dark: '#b25977',
        constrastText: "#fff",
    }
  }, 
  typography: {
    useNextVariants: true,
  },
});

class App extends Component{
  render(){
    return (
      <MuiThemeProvider theme = {theme}>
        <div className = "App">
        <Router>
          <NavBar/>
          <div className = "container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} redirect = "/codey"/>
              <Route path="/signup" component={Signup} />
              <Route path="/codey" component = {Codey} />
              <Route path="/reacttomyreactapp" component={ReactToMyReactApp} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
