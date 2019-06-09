import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import * as routes from "../constants/routes"

const AuthRoute = ({component: Component, authenticated, ...rest}) => (
    <Route {...rest} 
        render= {(props) => 
                authenticated === true ? <Redirect to = {routes.RSOCIAL} /> : <Component {...props}/>
        }
    />
);

export default AuthRoute;

