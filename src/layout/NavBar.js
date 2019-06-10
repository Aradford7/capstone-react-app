import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import PostReact from '../components/Reaction/PostReact'
import cutelogo from '../layout/images/icon.png'
//import PostReact  from './Reaction/PostReact'
//import Notifications from './Notifications';
//Style Stuff
import {AppBar, Toolbar, Button} from '@material-ui/core'
import MyButton from '../Theme/MyButton';
//icon stuff
import HomeIcon from '@material-ui/icons/Home';

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
                                <HomeIcon color = "secondary"/>
                            </MyButton>
                        </Link>

                        <Link to = "/reacttomyreactapp">
                            <MyButton tip = "React Chat">
                                <HotIcon color = "secondary"/>
                            </MyButton>
                        </Link>
                        

                            <Link to = "/codey">
                                <Button color = "inherit" component = {Link} to={"/codey"}><img style = {{width: "25px", height:"25px" }} alt = "" src = {cutelogo}/></Button>
                            </Link>

                            <PostReact/>
                       
                            <MyButton tip = "Notifications">
                                <Notifications color = "secondary"/>
                            </MyButton>
                        

                    </Fragment>
                  ): (
                      <Fragment>
                            <Button color ="inherit" component = {Link} to={"/signup"}>SIGN UP</Button>
                            <Button color = "inherit" component = {Link} to={"/"}>HOME</Button>
                           
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

// <Button color = "inherit" component = {Link} to={"/reacttomyreactapp"}>REACTIONS</Button> on home nav 