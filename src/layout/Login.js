import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AppIcon from '../layout/images/icon.png'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'//use prop types, way a built in method in react for type checking
//Redux stufff
import {connect} from 'react-redux'
import {loginUser} from '../redux/Actions/userActions'
//MUI 
import { PacmanLoader} from 'react-spinners';
import {Grid, Typography, TextField, Button, Container,} from '@material-ui/core'


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
        padding:  '10px auto 10px auto',
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
           
};



class Login extends Component {
    //handle forms by control component use state or get references
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
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
        const userData ={
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData, this.props.history)
        
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    };
    render() {
        const {classes, UI: {loading}} = this.props;
        const {errors} = this.state;

        return (
        <Container className = {classes.login}>
            <Grid container className = {classes.form}>
                <Grid item md />
                <Grid item md >
                    <Typography variant = "h2" className = {classes.pageTitle}>
                        Welcome Back!
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

                        {errors.general && (
                            <Typography variant = "body2" className = {classes.customError}>
                                {errors.general}
                            </Typography>
                        )}

                        <br/>
                        <small>Don't have an account? Sign up <Link to = "/signup">HERE</Link></small>
                        <br/>

                        <Button 
                            type = "submit" 
                            variant = "contained" 
                            className = {classes.button}
                            disabled = {loading}>
                                LOGIN 
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


Login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    loginUser
}


export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Login));