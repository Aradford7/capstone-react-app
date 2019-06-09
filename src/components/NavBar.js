import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import cutelogo from '../layout/images/icon.png'
//import PostReact  from './Reaction/PostReact'
//import Notifications from './Notifications';
//Style Stuff
import {AppBar, Toolbar, Button} from '@material-ui/core'
import MyButton from '../Theme/MyButton';
//icon stuff
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import Notifications from '@material-ui/icons/Notifications'
import HotIcon from '@material-ui/icons/Whatshot'


class NavBar extends Component {
    render() {
        const { authenticated } = this.props;
        return (
            <AppBar>
                <Toolbar className = "nav-container">
                  {authenticated ? (
                    <Fragment>

                        <Link to = "/">
                            <MyButton tip = "Home">
                                <HomeIcon color = " rgb(134,225,243)"/>
                            </MyButton>
                        </Link>

                        <Link to = "/reacttomyreactapp">
                            <MyButton tip = "Hot">
                                <HotIcon color = " rgb(134,225,243)"/>
                            </MyButton>
                        </Link>
                        

                            <Link to = "/codey">
                                <Button color = "inherit" component = {Link} to={"/codey"}><img style = {{width: "25px", height:"25px" }} alt = "" src = {cutelogo}/></Button>
                            </Link>


                        <MyButton tip = "Post a React!">
                                <AddIcon color = " rgb(134,225,243)"/>
                            </MyButton>
                       
                            <MyButton tip = "Notifications">
                                <Notifications color = " rgb(134,225,243)"/>
                            </MyButton>
                        

                    </Fragment>
                  ): (
                      <Fragment>
                            <Button color ="inherit" component = {Link} to={"/signup"}>SIGN UP</Button>
                            <Button color = "inherit" component = {Link} to={"/"}>HOME</Button>
                            <Button color = "inherit" component = {Link} to={"/reacttomyreactapp"}>REACTIONS</Button>
                            <Button color = "inherit" component = {Link} to={"/login"}>LOGIN</Button>
                      </Fragment>
                  )}
                </Toolbar>
            </AppBar>
        )
    }
}
NavBar.propTypes = {
    authenticated:PropTypes.bool.isRequired
}
const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
});
export default connect(mapStateToProps)(NavBar) 

//     <Button color ="inherit" component = {Link} to={routes.SIGNUP}>SIGN UP</Button>
// <Button right color = "inherit" component = {Link} to={routes.LOGIN}>LOGIN</Button>
// <Button color = "inherit" component = {Link} to={routes.LANDING}>HOME</Button>