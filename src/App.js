import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components imports
import NavBar from './components/NavBar/NavBar'
//Layout routes
import {Home} from './layout/Home';
import {Login} from './layout/Login';
import {Signup} from './layout/Signup';
import {ReactToMyReactApp} from './layout/ReactToMyReactApp'
import {Codey} from './layout/Codey';
import {NoMatch} from './layout/NoMatch';


//Styles
import './App.css';

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Router>
          <NavBar/>
          <div className = "container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/codey" component = {Codey}/>
              <Route path="/reacttomyreactapp" component={ReactToMyReactApp} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}


export default App;
