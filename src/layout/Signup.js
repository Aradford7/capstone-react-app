

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AppIcon from '../layout/images/icon.png'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'//use prop types, way a built in method in react for type checking
//redux stuff
import {connect} from 'react-redux'
import{signupUser} from '../redux/Actions/userActions'
//MUI 
import { PacmanLoader} from 'react-spinners';
import {Grid, Typography, TextField, Button, Container,} from '@material-ui/core'


//global themne
const styles = {
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
    signup:{
        maxWidth: 800,
        height: 630,
        background:'#c786d3',
    },
    progress: {
        position: 'absolute',
        color: '#F8E71C'
    }
}



class Signup extends Component {
    //handle forms by control component use state or get references
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            username: '',
            errors: {}, //arr for errors on form
           
        }
    }
    componentWillRecieveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({errors: nextProps.UI.errors});
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            loading:true
        });
        const newUserData ={
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            username: this.state.username,
        }
        this.props.signupUser(newUserData, this.props.history);
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    };
    render() {
        const {classes, loading} = this.props;
        const {errors} = this.state;

        return (
        <Container className = {classes.signup}>
            <Grid container className = {classes.form}>
                <Grid item md />
                <Grid item md >
                    <Typography variant = "h2" className = {classes.pageTitle}>
                        Sign Up!
                    </Typography>
                  
                    <img src = {AppIcon} alt= "capstone" classesName = {classes.image}/>
    
                    <form noValidate onSubmit = {this.handleSubmit}>
                        <TextField 
                        id = "email" 
                        name = "email" 
                        type = "email" 
                        label = "Email" 
                        helperText = {errors.email}
                        error = {errors.email ? true : false}
                        className = {classes.textField}
                        value = {this.state.email} 
                        onChange = {this.handleChange} 
                        fullWidth/> 

                         <TextField 
                         id = "password" 
                         name = "password" 
                         type = "password" 
                         label = "Password" 
                         className = {classes.textField}
                         helperText = {errors.password}
                         error = {errors.password ? true : false}
                         value = {this.state.password} 
                         onChange = {this.handleChange} 
                         fullWidth/> 

                        <TextField 
                         id = "confirmPassword" 
                         name = "confirmPassword" 
                         type = "password" 
                         label = "Confirm Password" 
                         className = {classes.textField}
                         helperText = {errors.confirmPassword}
                         error = {errors.password ? true : false}
                         value = {this.state.confirmPassword} 
                         onChange = {this.handleChange} 
                         fullWidth/> 

                        <TextField 
                         id = "username" 
                         name = "username" 
                         type = "text" 
                         label = "Username" 
                         className = {classes.textField}
                         helperText = {errors.username}
                         error = {errors.password ? true : false}
                         value = {this.state.username} 
                         onChange = {this.handleChange} 
                         fullWidth/> 

                        {errors.general && (
                            <Typography variant = "body2" className = {classes.customError}>
                                {errors.general}
                            </Typography>
                        )}

                        <br/>
                        <small>Already have an account? Login <Link to = "/login">HERE</Link></small>
                        <br/>

                        <Button 
                            type = "submit" 
                            variant = "contained" 
                            className = {classes.button}
                            disabled = {loading}>
                                SIGN UP
                                {loading && (
                                <PacmanLoader className = {classes.progress}/>)}
                        </Button>

                        
                    </form>
                </Grid>
                <Grid item md />
            </Grid>
        </Container>
        
        )
    }
};


Signup.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
})
export default connect(mapStateToProps, {signupUser})(withStyles(styles)(Signup));