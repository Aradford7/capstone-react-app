import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components imports
import NavBar from './components/NavBar/NavBar'
//Layout routes
import {Home} from './layout/Home';
import Login from './layout/Login/Login';
import Signup from './layout/Signup/Signup';
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
  form: {
    textAlign: 'center',
    color: 'white'

},
image: {
    margin: '20px auto 20px auto'
},
pageTitle: {
    margin: '10px auto 10px auto',
    textAlign: 'center',
},
textField: {
    margin: '10px auto 10px auto',
    width: 600,
    color: 'white'
},
button: {
    marginTop: 20,
    background: 'linear-gradient(45deg, #ff80ab 30%, #ff99bb 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '10px auto 10px auto',    
    position: 'relative'
},
customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: 10,
},
login:{
    maxWidth: 800,
    height: 480,
    background:'#c786d3',
},
progress: {
    position: 'absolute',
    color: '#F8E71C'
}
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
