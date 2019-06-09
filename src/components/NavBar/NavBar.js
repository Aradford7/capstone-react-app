import React, { Component } from 'react'
import {Link} from "react-router-dom"
//Style Stuff
import {AppBar, Toolbar, Button} from '@material-ui/core'

class NavBar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar className = "nav-container">
                    <Button color = "inherit" component = {Link} to={"/codey"}>CODEY</Button>
                    <Button color = "inherit" component = {Link} to={"/reacttomyreactapp"}>REACTIONS</Button>
                    <Button right color = "inherit" component = {Link} to={"/login"}>LOGIN</Button>
                   
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavBar

//     <Button color ="inherit" component = {Link} to={routes.SIGNUP}>SIGN UP</Button>
// <Button right color = "inherit" component = {Link} to={routes.LOGIN}>LOGIN</Button>
// <Button color = "inherit" component = {Link} to={routes.LANDING}>HOME</Button>